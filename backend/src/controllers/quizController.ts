// quizController.ts
import { Request, Response } from 'express';
import Quiz from '../models/quizModel';
import Question from '../models/questionModel';
import mongoose from 'mongoose';

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

// Get all quizzes with populated question text
export const getQuizzes = async (req: Request, res: Response): Promise<void> => {
  try {
    const quizzes = await Quiz.find()
      .populate({
        path: 'questions',
        select: 'questionText options category',
        options: { lean: true }
      })
      .lean();
    
    res.status(200).json(quizzes);
  } catch (err) {
    console.error('Error in getQuizzes:', err);
    res.status(500).json({ 
      message: 'Server Error',
      error: err instanceof Error ? err.message : 'Unknown error'
    });
  }
};

// Get a quiz by ID with all questions populated
export const getQuizById = async (req: Request, res: Response): Promise<void> => {
  try {
    const quizId = req.params.id;
    
    const quiz = await Quiz.findById(quizId)
      .populate({
        path: 'questions',
        select: 'questionText options category',
        options: { lean: true }
      })
      .lean()
      .exec();
    
    if (!quiz) {
      res.status(404).json({ message: 'Quiz not found' });
      return;
    }

    res.status(200).json(quiz);
  } catch (err) {
    console.error('Error fetching quiz by ID:', err instanceof Error ? err.message : err);
    res.status(500).json({ 
      message: 'Server Error',
      error: err instanceof Error ? err.message : 'Unknown error'
    });
  }
};

// Create a new quiz with specified questions
export const createQuiz = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, questions } = req.body;

    // Validate that all questions exist before creating the quiz
    const questionIds = questions.map((q: string) => new mongoose.Types.ObjectId(q));
    const existingQuestions = await Question.find({ _id: { $in: questionIds }});
    
    if (existingQuestions.length !== questions.length) {
      res.status(400).json({ message: 'Some questions do not exist' });
      return;
    }

    const newQuiz = new Quiz({
      title,
      description,
      questions: questionIds
    });

    const savedQuiz = await newQuiz.save();
    
    // Populate the saved quiz before sending response
    const populatedQuiz = await Quiz.findById(savedQuiz._id)
      .populate({
        path: 'questions',
        select: 'questionText options category'
      });

    res.status(201).json(populatedQuiz);
  } catch (err) {
    console.error('Error creating quiz:', err instanceof Error ? err.message : err);
    res.status(500).json({ 
      message: 'Server Error',
      error: err instanceof Error ? err.message : 'Unknown error' 
    });
  }
};


export const submitQuiz = async (req: Request, res: Response): Promise<void> => {
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
      const correctOption = question.options.find((option: any) => option.isCorrect)?.text || '';

      const isCorrect = userAnswer 
        ? question.options.some((option: any) => option.text === userAnswer.selectedOption && option.isCorrect) 
        : false;

      if (isCorrect) {
        score += 1;
      }

      return {
        questionId: question._id.toString(),
        questionText: question.questionText,
        selectedOption: userAnswer ? userAnswer.selectedOption : null,
        correctOption,
        isCorrect
      };
    });

    res.status(200).json({ score, totalQuestions: quiz.questions.length, results });
  } catch (err) {
    console.error('Error submitting quiz:', err instanceof Error ? err.message : err);
    res.status(500).json({ message: 'Server Error' });
  }
};
