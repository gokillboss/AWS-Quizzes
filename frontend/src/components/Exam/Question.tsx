import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  ProgressBar,
} from "react-bootstrap";
import { FlagFill, Flag } from "react-bootstrap-icons";
import CountdownClock from "./CountdownClock";
import AIAssistant from "../AIAssistant/AIAssistant";
import "./Question.css";

// Shuffle function to randomize the order of the options
const shuffleArray = <T,>(array: T[]): T[] => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

// Define prop types
interface Option {
  text: string;
  isCorrect: boolean;
}

interface QuestionProps {
  question: {
    newId: number;
    questionText: string;
    options: Option[];
  };
  onNext: () => void;
  onBack: () => void;
  onMark: (id: number) => void;
  totalQuestions: number;
  handleAnswer: (questionId: number, answer: string) => void;
  markedQuestions: number[];
  answers: Record<number, string>;
  currentQuestion: number;
  onGoTo: (questionId: number) => void;
  isReview: boolean;
  correctAnswers: Record<number, boolean>;
}

const Question: React.FC<QuestionProps> = ({
  question,
  onNext,
  onBack,
  onMark,
  totalQuestions,
  handleAnswer,
  markedQuestions,
  answers,
  currentQuestion,
  onGoTo,
  isReview,
  correctAnswers,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [shuffledOptions, setShuffledOptions] = useState<Option[]>([]);
  const [localAnswers, setLocalAnswers] = useState<Record<number, string>>(answers);
  const [timeLeft, setTimeLeft] = useState<number>(90 * 60);
  // Add a key state to force AIAssistant remount
  const [aiKey, setAiKey] = useState<number>(0);

  useEffect(() => {
    if (question.options) {
      setShuffledOptions(shuffleArray(question.options));
    }
  }, [question.options]);

  useEffect(() => {
    if (answers[question.newId]) {
      setSelectedAnswer(answers[question.newId]);
    } else {
      setSelectedAnswer("");
    }
    setLocalAnswers(answers);
  }, [question.newId, answers]);

  useEffect(() => {
    if (!isReview) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isReview]);

  const handleSelectAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isReview) {
      const newAnswer = e.target.value;
      setSelectedAnswer(newAnswer);
      handleAnswer(question.newId, newAnswer);
      setLocalAnswers((prev) => ({ ...prev, [question.newId]: newAnswer }));
    }
  };

  const handleNext = () => {
    // Increment aiKey to force AIAssistant remount
    setAiKey(prev => prev + 1);
    onNext();
  };

  const renderQuestionGrid = () => {
    return (
      <div className="question-grid">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const questionId = index + 1;
          const isAnswered = localAnswers.hasOwnProperty(questionId);
          const isMarked = markedQuestions.includes(questionId);
          const isCurrent = currentQuestion === questionId;

          const isCorrect = correctAnswers && correctAnswers[questionId];
          const isIncorrect = correctAnswers && correctAnswers[questionId] === false;

          let buttonClass = "question-button ";
          if (isCorrect) {
            buttonClass += "correct";
          } else if (isIncorrect) {
            buttonClass += "incorrect";
          } else {
            buttonClass += isAnswered
              ? isCurrent
                ? "answered"
                : "answered-not-current"
              : "not-answered";
          }
          buttonClass += isCurrent ? " current" : "";

          return (
            <div
              key={questionId}
              className={buttonClass}
              onClick={() => onGoTo(questionId)}
            >
              {isMarked ? <FlagFill className="flag-icon" /> : null}
              {questionId}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col lg={6} md={12} className="mb-4">
          <Card className="question-card shadow p-2 mb-3 w-100 ">
            <Card.Body>
              <Card.Title>
                {markedQuestions.includes(currentQuestion) && (
                  <FlagFill color="red" className="mr-5" />
                )}
                Question {currentQuestion}
              </Card.Title>
              <Card.Text>{question.questionText}</Card.Text>

              <Form.Group as={Row} className="mb-3 my-3">
                <Col sm="12">
                  {shuffledOptions.map((option, index) => {
                    const isCorrect = option.isCorrect;
                    const isSelected = selectedAnswer === option.text;

                    let labelStyle: React.CSSProperties = {};
                    if (isReview) {
                      if (isCorrect) {
                        labelStyle = { color: "green" };
                      } else if (isSelected && !isCorrect) {
                        labelStyle = { color: "red" };
                      }
                    }

                    return (
                      <Form.Check
                        key={index}
                        type="radio"
                        id={`option-${question.newId}-${index}`}
                        label={option.text}
                        value={option.text}
                        checked={isSelected}
                        onChange={handleSelectAnswer}
                        disabled={isReview}
                        style={labelStyle}
                      />
                    );
                  })}
                </Col>
              </Form.Group>
              <AIAssistant
                key={aiKey}
                questionText={question.questionText}
                selectedAnswer={selectedAnswer}
                options={shuffledOptions}
              />

              <Row className="my-3 d-flex justify-content-between">
                <Col>
                  <button onClick={onBack} disabled={currentQuestion === 1}>
                    Back
                  </button>
                </Col>
                <Col className="d-flex justify-content-center">
                  <div
                    onClick={() => !isReview && onMark(currentQuestion)}
                    style={{ cursor: isReview ? "default" : "pointer" }}
                  >
                    {markedQuestions.includes(currentQuestion) ? (
                      <FlagFill color="red" size={30} />
                    ) : (
                      <Flag size={30} />
                    )}
                  </div>
                </Col>
                <Col className="d-flex justify-content-end">
                  <button
                    onClick={handleNext}
                    disabled={currentQuestion === totalQuestions}
                  >
                    Next
                  </button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={12}>
          <div className="py-3">
            <CountdownClock timeLeft={timeLeft} />
            <ProgressBar
              variant="info"
              now={(timeLeft / (90 * 60)) * 100}
              className="time-progress-bar"
            />
          </div>
          <div className="my-5">{renderQuestionGrid()}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Question;