import { Request, Response } from 'express';
import Quiz from '../models/quizModel';
import Question from '../models/questionModel';

export const getTests = async (req: Request, res: Response): Promise<void> => {
  try {
    const quizzes = await Quiz.find().populate('questions', 'questionText');
    res.status(200).json(quizzes);
  } catch (err) {
    console.error('Error fetching quizzes:', err instanceof Error ? err.message : err);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getTestById = async (req: Request, res: Response): Promise<void> => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate('questions');
    if (!quiz) {
      res.status(404).json({ message: 'Quiz not found' });
      return;
    }
    res.status(200).json(quiz);
  } catch (err) {
    console.error('Error fetching quiz by ID:', err instanceof Error ? err.message : err);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createTest = async (req: Request, res: Response): Promise<void> => {
  const { title, description, questions } = req.body;
  try {
    const newQuiz = new Quiz({
      title,
      description,
      questions
    });

    const quiz = await newQuiz.save();
    res.status(201).json(quiz);
  } catch (err) {
    console.error('Error creating quiz:', err instanceof Error ? err.message : err);
    res.status(500).json({ message: 'Server Error' });
  }
};

interface Answer {
  questionId: string;
  selectedOption: string;
}

interface Result {
  questionId: string;
  questionText: string;
  selectedOption: string | null;
  correctOption: string;
  isCorrect: boolean;
}

export const submitTest = async (req: Request, res: Response): Promise<void> => {
  const { answers } = req.body as { answers: Answer[] };
  
  try {
    const quiz = await Quiz.findById(req.params.id).populate('questions');
    if (!quiz) {
      res.status(404).json({ message: 'Quiz not found' });
      return;
    }

    let score = 0;
    const results: Result[] = quiz.questions.map((question: any) => {
      const userAnswer = answers.find(answer => answer.questionId === question._id.toString());
      const isCorrect = userAnswer && question.options.find((option: any) => option.text === userAnswer.selectedOption && option.isCorrect);

      if (isCorrect) {
        score += 1;
      }

      return {
        questionId: question._id.toString(),
        questionText: question.questionText,
        selectedOption: userAnswer ? userAnswer.selectedOption : null,
        correctOption: question.options.find((option: any) => option.isCorrect)?.text,
        isCorrect: !!isCorrect
      };
    });

    res.status(200).json({ score, totalQuestions: quiz.questions.length, results });
  } catch (err) {
    console.error('Error submitting quiz:', err instanceof Error ? err.message : err);
    res.status(500).json({ message: 'Server Error' });
  }
};
