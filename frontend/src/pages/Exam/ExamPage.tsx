import React, { useEffect, useState, useCallback } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  getQuizzes,
  checkQuizPurchase,
  createCheckoutSession,
} from "../../services/api";
import "./ExamPage.css";

// Define types for quizzes and purchased quizzes
interface Quiz {
  _id: string;
  title: string;
  description: string;
  price: number;
}

interface PurchasedQuizzes {
  [key: string]: boolean;
}

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!);

const ExamPage: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [purchasedQuizzes, setPurchasedQuizzes] = useState<PurchasedQuizzes>(
    {}
  );
  const navigate = useNavigate();

  const fetchQuizzes = useCallback(async () => {
    try {
      const response = await getQuizzes();
      setQuizzes(response.data);

      const purchasedStatus: PurchasedQuizzes = {};
      await Promise.all(
        response.data.map(async (quiz: Quiz) => {
          if (quiz.price > 0) {
            const purchaseResponse = await checkQuizPurchase(quiz._id);
            if (purchaseResponse) {
              purchasedStatus[quiz._id] = purchaseResponse.purchased;
            }
          }
        })
      );
      setPurchasedQuizzes(purchasedStatus);
    } catch (error) {
      console.error("Error loading quizzes or purchase data:", error);
    }
  }, []);

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  const handlePayment = async (id: string) => {
    try {
      const response = await createCheckoutSession(id);
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId: response.sessionId,
      });
      if (error) {
        console.error("Stripe payment failed:", error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  const handleStartTest = (id: string) => {
    navigate(`/exams/${id}`);
  };

  return (
    <Container fluid className="exam-page-container py-5">
      <Row className="g-4">
        {/* Introduction Section */}
        <Col lg={6} md={12} className="align-items-center">
          <h3>Introduction and Exam Rules</h3>
          <p>
            Welcome to the practice exam page. Please review the following
            guidelines before starting:
          </p>
          <ul>
            <li>
              The exam consists of 70 questions, and you have 90 minutes to
              complete it.
            </li>
            <li>You can mark questions to review later.</li>
            <li>
              You may go back to previous questions or jump to any question
              using the control panel.
            </li>
            <li>Click the "Submit" button to finish the exam.</li>
          </ul>
          <p>
            Please select an exam from the list below and start when you’re
            ready.
          </p>
        </Col>

        {/* Quizzes List Section */}
        <Col lg={6} md={12}>
          <Row className="g-4">
            {quizzes.map((quiz) => (
              <Col key={quiz._id} lg={6} md={12} sm={12} className="quiz-item">
                <Card className="h-100 exam-quiz-card">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="mb-3 d-flex justify-content-between align-items-center">
                      <span>{quiz.title}</span>
                      {quiz.price > 0 && (
                        <Badge bg="info" pill>
                          ${quiz.price}
                        </Badge>
                      )}
                    </Card.Title>
                    <Card.Text className="flex-grow-1">
                      {quiz.description}
                    </Card.Text>
                    <div className="mt-3">
                      {quiz.price === 0 || purchasedQuizzes[quiz._id] ? (
                        <button
                          onClick={() => handleStartTest(quiz._id)}
                          className="w-100 exam-button exam-button-primary"
                        >
                          Start Exam
                        </button>
                      ) : (
                        <button
                          onClick={() => handlePayment(quiz._id)}
                          className="w-100 exam-button exam-button-success"
                        >
                          Purchase Exam
                        </button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ExamPage;
