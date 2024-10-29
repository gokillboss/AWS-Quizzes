import { Request, Response } from 'express';
import Stripe from 'stripe';
import User from '../models/userModel';
import Transaction from '../models/transactionModel';
import Quiz from '../models/quizModel';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-09-30.acacia',
});

interface AuthRequest extends Request {
  user?: { id: string };
}

export const createCheckoutSession = async (req: AuthRequest, res: Response): Promise<void> => {
  const { quizId } = req.body;

  try {
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      res.status(404).json({ message: 'Quiz not found' });
      return;
    }

    // Kiểm tra biến môi trường
    const clientUrl = process.env.CLIENT_URL;
    if (!clientUrl) {
      throw new Error("Client URL is not defined in environment variables");
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: quiz.title,
            },
            unit_amount: (quiz.price ?? 0) * 100, // Stripe expects the amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${clientUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${clientUrl}/quizzes`,
      metadata: {
        userId: req.user?.id || '', // Đảm bảo userId là string
        quizId: quizId,
      },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error instanceof Error ? error.message : error);
    res.status(500).json({ message: 'Server error creating checkout session' });
  }
};


// Verify Purchase
export const verifyPurchase = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    console.log('Verifying purchase called');
    const userId = req.user?.id;
    const quizId = req.query.quizId as string;

    if (!quizId) {
      res.status(400).json({ message: 'Quiz ID is required' });
      return;
    }

    const transaction = await Transaction.findOne({ userId, quizId });
    console.log('Transaction:', transaction);

    res.status(200).json({
      purchased: !!transaction,
      transactionId: transaction?._id,
    });
  } catch (error) {
    console.error('Error verifying purchase:', error instanceof Error ? error.message : error);
    res.status(500).json({ message: 'Server error verifying purchase' });
  }
};

// Handle Stripe Webhook
export const handleStripeWebhook = async (req: Request, res: Response): Promise<void> => {
  const sig = req.headers['stripe-signature'] as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error(`⚠️  Webhook signature verification failed.`, errorMessage);
    res.status(400).send(`Webhook Error: ${errorMessage}`);
    return;
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      const transaction = new Transaction({
        userId: session.metadata?.userId,
        quizId: session.metadata?.quizId,
        amount: (session.amount_total || 0) / 100, // Convert cents to dollars
        transactionDate: new Date(),
      });

      await transaction.save();
      console.log('Transaction saved successfully');

      const user = await User.findById(session.metadata?.userId);
      if (user) {
        user.isPremium = true;
        await user.save();
        console.log('User upgraded to Premium');
      } else {
        console.error('User not found');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      console.error('Error processing transaction or updating user:', errorMessage);
    }
  } else {
    console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send();
};
