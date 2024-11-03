import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import './Quizzes.css';
import { getQuizzes, checkQuizPurchase, createCheckoutSession } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Stripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY || '');

interface Quiz {
  _id: string;
  title: string;
  description: string;
  price: number;
}

const Quizzes: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [purchasedQuizzes, setPurchasedQuizzes] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const fetchQuizzes = useCallback(async () => {
    try {
      const response = await getQuizzes();
      setQuizzes(response.data);

      const purchasedStatus: Record<string, boolean> = {};
      await Promise.all(response.data.map(async (quiz: Quiz) => {
        if (quiz.price > 0) {
          const purchaseResponse = await checkQuizPurchase(quiz._id);
          if (purchaseResponse) {
            purchasedStatus[quiz._id] = purchaseResponse.purchased;
          }
        }
      }));
      setPurchasedQuizzes(purchasedStatus);
    } catch (error) {
      console.error('Error fetching quizzes or purchase data:', error);
    }
  }, []);

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  const handleStartTest = (id: string) => {
    navigate(`/quizzes/${id}`);
  };

  const handlePayment = async (id: string) => {
    try {
      const response = await createCheckoutSession(id);
      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId: response.sessionId });
        if (error) {
          console.error('Stripe payment failed:', error);
        }
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <Container className="quizzes-container my-5">
      <Row>
        <h2 className="text-center mb-5">Practice Quizzes</h2>
        {quizzes.map(quiz => (
          <Col key={quiz._id} lg={3} md={6} className="mb-4">
            <Card className="quiz-card h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3">
                  {quiz.title}
                  {quiz.price > 0 && (
                    <Badge bg="info" className="ms-2">
                      ${quiz.price}
                    </Badge>
                  )}
                </Card.Title>
                <Card.Text className="flex-grow-1">{quiz.description}</Card.Text>
                <div className="mt-auto">
                  {quiz.price === 0 || purchasedQuizzes[quiz._id] ? (
                    <Button
                      variant="primary"
                      onClick={() => handleStartTest(quiz._id)}
                      className="btn"
                    >
                      Start Test
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      onClick={() => handlePayment(quiz._id)}
                      className="btn"
                    >
                      Purchase Quiz
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Quizzes;
