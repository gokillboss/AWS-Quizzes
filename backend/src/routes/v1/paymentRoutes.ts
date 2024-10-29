import express, { Request, Response, Router } from 'express';
import { createCheckoutSession, handleStripeWebhook, verifyPurchase } from '../../controllers/paymentController';
import auth from '../../middlewares/authMiddleware';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Payment route is working!');
});

router.get('/check-purchase', auth, verifyPurchase);
router.post('/create-checkout-session', auth, createCheckoutSession);

// Webhook route for Stripe, using raw body parser
router.post('/webhook', express.raw({ type: 'application/json' }), (req: Request, res: Response) => {
    console.log('Received Stripe webhook:', req.body);  // Log received webhook payload
    handleStripeWebhook(req, res);  // Call the actual webhook handler
});

export default router;
