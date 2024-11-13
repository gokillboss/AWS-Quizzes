import React, { useState, useEffect } from 'react';
import Question from './Question';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuiz } from '../../services/api';
import './Exam.css';

interface Option {
    text: string;
    isCorrect: boolean;
}

interface QuestionType {
    _id: string;
    questionText: string;
    options: Option[];
    newId: number; // Ensure `newId` is defined as `number`
}

interface QuizType {
    title: string;
    questions: QuestionType[];
}

interface ResultData {
    totalQuestions: number;
    correctAnswers: number;
    score: string;
}

const Exam: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [quiz, setQuiz] = useState<QuizType | null>(null);
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(1);
    const [markedQuestions, setMarkedQuestions] = useState<number[]>([]);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState<boolean>(false);
    const [resultData, setResultData] = useState<ResultData | null>(null);
    const [passStatus, setPassStatus] = useState<boolean>(false);
    const [correctAnswers, setCorrectAnswers] = useState<Record<number, boolean>>({});
    const [isReview, setIsReview] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchQuiz = async () => {
          try {
              const response = await getQuiz(id!);
              const quizData = response.data;
              const shuffledQuestions: QuestionType[] = quizData.questions.sort(() => 0.5 - Math.random());
              const selectedQuestions = shuffledQuestions.slice(0, 70);
  
              const questionsWithNewIds = selectedQuestions.map((question: QuestionType, index: number) => ({
                  ...question,
                  newId: index + 1, // Ensure newId is always assigned
              }));
  
              setQuiz(quizData);
              setQuestions(questionsWithNewIds);
          } catch (error) {
              console.error('Error fetching quiz', error);
          }
      };
  
      fetchQuiz();
  }, [id]);
  

    const handleNext = () => {
        if (currentQuestion < questions.length) setCurrentQuestion(currentQuestion + 1);
    };

    const handleBack = () => {
        if (currentQuestion > 1) setCurrentQuestion(currentQuestion - 1);
    };

    const handleMark = (id: number) => {
        setMarkedQuestions((prev) =>
            prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
        );
    };

    const handleAnswer = (questionId: number, answer: string) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
        }));
    };

    const handleSubmitTest = () => {
        const newCorrectAnswers: Record<number, boolean> = {};
        const correctCount = questions.reduce((count, question) => {
            const selectedAnswer = answers[question.newId];
            const correctOption = question.options.find((option) => option.isCorrect);
            if (correctOption && correctOption.text === selectedAnswer) {
                newCorrectAnswers[question.newId] = true;
                return count + 1;
            }
            newCorrectAnswers[question.newId] = false;
            return count;
        }, 0);

        const score = ((correctCount / questions.length) * 100).toFixed(2);

        setResultData({
            totalQuestions: questions.length,
            correctAnswers: correctCount,
            score,
        });

        setCorrectAnswers(newCorrectAnswers);
        setPassStatus(parseFloat(score) >= 75);
        setShowResults(true);
    };

    const handleRetakeTest = () => {
        navigate(`/exams`);
    };

    const handleReviewTest = () => {
        setShowResults(false);
        setIsReview(true);
    };

    if (!quiz || questions.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="exam-container">
            <h1 className="text-center mb-4">{quiz.title}</h1>
            <Card className="question-card shadow-lg p-3 mb-5 bg-white rounded">
                <Question
                    question={questions[currentQuestion - 1]}
                    onNext={handleNext}
                    onBack={handleBack}
                    onMark={handleMark}
                    totalQuestions={questions.length}
                    handleAnswer={handleAnswer}
                    markedQuestions={markedQuestions}
                    answers={answers}
                    currentQuestion={currentQuestion}
                    onGoTo={(questionId) => setCurrentQuestion(Number(questionId))}
                    isReview={isReview}
                    correctAnswers={correctAnswers}
                />
            </Card>

            <Row className="my-4 text-center">
                <Col>
                    {!isReview ? (
                        <Button variant="success" onClick={handleSubmitTest} className="submit-test-btn">
                            Submit Test
                        </Button>
                    ) : (
                        <Button variant="primary" onClick={handleRetakeTest}>
                            Retake Test
                        </Button>
                    )}
                </Col>
            </Row>

            <Modal show={showResults} onHide={handleRetakeTest} centered>
                <Modal.Header>
                    <Modal.Title>Test Results</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <p>Total Questions: {resultData?.totalQuestions}</p>
                    <p>Correct Answers: {resultData?.correctAnswers}</p>
                    <p>Your Score: {resultData?.score}%</p>

                    {passStatus ? (
                        <div className="congratulations-message">
                            🎉 Congratulations! You passed! 🎉
                        </div>
                    ) : (
                        <div className="failed-message">
                            😢 Sorry! You did not pass. Please try again! 😢
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleRetakeTest}>
                        Retake Test
                    </Button>
                    <Button variant="secondary" onClick={handleReviewTest}>
                        Review Test
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Exam;
