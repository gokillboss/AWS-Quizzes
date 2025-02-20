// src/components/QuizDetail/QuizDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Alert,
  Card,
  ProgressBar,
} from "react-bootstrap";
import { ChatDots, XCircle } from "react-bootstrap-icons";
import { getQuiz, submitQuiz } from "../../services/api";
import AIAssistant from "../AIAssistant/AIAssistant";
import "./Quizdetail.css";

interface Option {
  _id: string;
  text: string;
}

interface Question {
  _id: string;
  questionText: string;
  options: Option[];
}

interface Quiz {
  _id: string;
  title: string;
  questions: Question[];
}

interface Result {
  questionId: string;
  selectedOption: string;
  correctOption: string;
  isCorrect: boolean;
}

interface QuizResults {
  score: number;
  totalQuestions: number;
  results: Result[];
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const QuizDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>(
    []
  );
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<QuizResults | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showAI, setShowAI] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const questionsPerPage = 5;

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await getQuiz(id as string);
        const quizData = response.data as Quiz;

        const shuffledQuestions = shuffleArray(quizData.questions).map(
          (question) => ({
            ...question,
            options: shuffleArray(question.options),
          })
        );

        setQuiz(quizData);
        setRandomizedQuestions(shuffledQuestions);
      } catch (error) {
        console.error("Error fetching quiz", error);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleChange = (questionId: string, selectedOption: string) => {
    setAnswers({
      ...answers,
      [questionId]: selectedOption,
    });
  };

  const toggleAI = (questionId: string) => {
    setShowAI((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedAnswers = Object.keys(answers).map((questionId) => ({
      questionId,
      selectedOption: answers[questionId],
    }));
    try {
      const response = await submitQuiz(id as string, {
        answers: formattedAnswers,
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error submitting quiz", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const paginatedQuestions = randomizedQuestions.slice(startIndex, endIndex);

  if (!quiz || randomizedQuestions.length === 0) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  if (results) {
    return (
      <Container className="my-5">
        <h2 className="text-center mb-4">{quiz.title} - Results</h2>
        <Card className="mb-4">
          <Card.Body>
            <Alert variant="info">
              <Alert.Heading>Your Score</Alert.Heading>
              <p className="mb-0">
                You scored {results.score} out of {results.totalQuestions}
              </p>
            </Alert>
            <ProgressBar
              now={(results.score / results.totalQuestions) * 100}
              label={`${Math.round(
                (results.score / results.totalQuestions) * 100
              )}%`}
              className="mt-3"
            />
          </Card.Body>
        </Card>

        {results.results.map((result, index) => {
          const question = randomizedQuestions.find(
            (q) => q._id === result.questionId
          );
          return (
            <div key={result.questionId} className="mb-4">
              <Card className="mb-3">
                <Card.Header>
                  <h5 className="mb-0">{`${index + 1}. ${
                    question?.questionText || "Question not found"
                  }`}</h5>
                </Card.Header>
                <Card.Body>
                  {question?.options.map((option) => {
                    const isSelected = result.selectedOption === option.text;
                    const isCorrect = option.text === result.correctOption;
                    return (
                      <Form.Check
                        key={option._id}
                        type="radio"
                        id={`${result.questionId}-${option._id}`}
                        label={option.text}
                        checked={isSelected}
                        disabled
                        className={`${
                          isCorrect
                            ? "text-success"
                            : isSelected
                            ? "text-danger"
                            : ""
                        }`}
                      />
                    );
                  })}
                  <Button
                    variant={
                      showAI[result.questionId]
                        ? "outline-danger"
                        : "outline-primary"
                    }
                    size="sm"
                    className="mt-3 d-flex align-items-center gap-2"
                    onClick={() => toggleAI(result.questionId)}
                  >
                    {showAI[result.questionId] ? (
                      <>
                        <XCircle size={18} />
                        <span>Close</span>
                      </>
                    ) : (
                      <>
                        <ChatDots size={18} />
                        <span>AI Assistant</span>
                      </>
                    )}
                  </Button>
                </Card.Body>
              </Card>

              {showAI[result.questionId] && (
                <AIAssistant
                  questionText={question?.questionText || ""}
                  selectedAnswer={result.selectedOption}
                  options={
                    question?.options.map((opt) => ({
                      text: opt.text,
                      isCorrect: opt.text === result.correctOption,
                    })) || []
                  }
                  isReview={true}
                />
              )}
            </div>
          );
        })}
        <div className="text-center mt-4">
          <Button variant="primary" onClick={() => navigate("/quizzes")}>
            Back to Quizzes
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">{quiz.title}</h2>
      <Form onSubmit={handleSubmit}>
        {paginatedQuestions.map((question, index) => (
          <div key={question._id} className="mb-4">
            <Row>
              <Col>
                <Card className="question-card mb-3">
                  <Card.Body>
                    <h5>{`${startIndex + index + 1}. ${
                      question.questionText
                    }`}</h5>
                    {question.options.map((option) => (
                      <Form.Check
                        key={option._id}
                        type="radio"
                        id={`${question._id}-${option._id}`}
                        name={question._id}
                        value={option.text}
                        label={option.text}
                        onChange={() => handleChange(question._id, option.text)}
                        className="my-2"
                      />
                    ))}
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <div
                  className={`ai-wrapper ${
                    showAI[question._id] ? "expanded" : ""
                  }`}
                >
                  <Button
                    variant={
                      showAI[question._id]
                        ? "outline-danger"
                        : "outline-primary"
                    }
                    size="sm"
                    className={`ai-toggle-btn ${
                      showAI[question._id] ? "hidden" : ""
                    }`}
                    onClick={() => toggleAI(question._id)}
                  >
                    <ChatDots size={18} />
                    <span>AI Assistant</span>
                  </Button>

                  {showAI[question._id] && (
                    <div className="ai-content">
                      <Button
                        variant="link"
                        className="close-btn"
                        onClick={() => toggleAI(question._id)}
                      >
                        <XCircle size={20} />
                      </Button>
                      <AIAssistant
                        questionText={question.questionText}
                        selectedAnswer={answers[question._id] || ""}
                        options={question.options.map((opt) => ({
                          text: opt.text,
                          isCorrect: false,
                        }))}
                      />
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        ))}

        <Card className="mb-4">
          <Card.Body>
            <Row className="align-items-center">
              <Col>
                <Button
                  variant="secondary"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
              </Col>
              <Col className="text-center">
                <Button variant="primary" type="submit">
                  Submit Quiz
                </Button>
              </Col>
              <Col className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  onClick={handleNextPage}
                  disabled={endIndex >= randomizedQuestions.length}
                >
                  Next
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <ProgressBar
          now={
            (currentPage /
              Math.ceil(randomizedQuestions.length / questionsPerPage)) *
            100
          }
          label={`${Math.round(
            (currentPage /
              Math.ceil(randomizedQuestions.length / questionsPerPage)) *
              100
          )}%`}
          className="mt-4"
        />
      </Form>
    </Container>
  );
};

export default QuizDetail;
