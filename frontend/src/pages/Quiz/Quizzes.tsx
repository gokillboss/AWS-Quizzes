import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';
import './Quizzes.css';
import { getQuizzes, checkQuizPurchase, createCheckoutSession } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchQuizzes = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getQuizzes();
      setQuizzes(response.data);

      const purchasedStatus: Record<string, boolean> = {};
      await Promise.all(
        response.data.map(async (quiz: Quiz) => {
          if (quiz.price > 0) {
            try {
              const purchaseResponse = await checkQuizPurchase(quiz._id);
              if (purchaseResponse) {
                purchasedStatus[quiz._id] = purchaseResponse.purchased;
              }
            } catch (error) {
              console.error(`Error checking purchase for quiz ${quiz._id}:`, error);
            }
          }
        })
      );
      setPurchasedQuizzes(purchasedStatus);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      setError('Failed to load quizzes. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  const handleStartTest = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    try {
      // Additional validation if needed before starting test
      if (purchasedQuizzes[id] || quizzes.find(q => q._id === id)?.price === 0) {
        navigate(`/quizzes/${id}`);
      } else {
        throw new Error('Quiz not purchased');
      }
    } catch (error) {
      console.error('Error starting test:', error);
      setError('Unable to start test. Please ensure you have purchased this quiz.');
    }
  };

  const handlePayment = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await createCheckoutSession(id);
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: response.sessionId
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Payment error:', error);
      setError('Payment process failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && quizzes.length === 0) {
    return (
      <Container className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  if (error && quizzes.length === 0) {
    return (
      <Container className="text-center my-5">
        <div className="alert alert-danger" role="alert">
          {error}
          <Button variant="link" onClick={() => fetchQuizzes()}>
            Try Again
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="quizzes-container my-5">
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button
            type="button"
            className="btn-close"
            onClick={() => setError(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

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
                      onClick={(e) => handleStartTest(e, quiz._id)}
                      className="w-100"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Loading...' : 'Start Test'}
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      onClick={(e) => handlePayment(e, quiz._id)}
                      className="w-100"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Processing...' : 'Purchase Quiz'}
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