// src/controllers/aiController.ts
import { Request, Response } from 'express';
import OpenAI from 'openai';
import CustomError from '../utils/customError';
import { handleAsync } from '../utils/handleAsync';

// Interfaces
interface QuestionOption {
  text: string;
  isCorrect: boolean;
}

interface AnalyzeQuestionRequest extends Request {
  body: {
    questionText: string;
    options: QuestionOption[];
    selectedAnswer: string;
  };
}

interface AnswerQueryRequest extends Request {
  body: {
    userQuery: string;
    questionText: string;
    selectedAnswer?: string;
    options?: QuestionOption[];
  };
}

// Hàm utility để làm sạch phản hồi
const cleanResponseText = (text: string): string => {
  if (!text) return '';
  // Loại bỏ từ undefined ở cuối
  return text.replace(/\s*undefined\s*$/, '');
};

// System prompts
const ANALYSIS_SYSTEM_PROMPT = `
You are an AWS Certification expert.
Analyze the question and answer in the following aspects:
- Explanation of why the selected answer is correct/incorrect
- Key AWS concepts in the question
- AWS services involved and how they connect to each other
- Real-life scenarios that may appear on the exam
- Real-life examples or similar real-life scenarios

Answer in English, detailed and easy to understand.
`;

const QUERY_SYSTEM_PROMPT = `
You are an AWS Certification expert helping students prepare for the exam.
Answer students' questions in detail, clearly, and provide specific examples when necessary.
Focus on practical knowledge and common exam scenarios.
Answer in English.
`;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Verify API key on startup
const verifyApiKey = async () => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Test connection" }],
      max_tokens: 5
    });
    console.log('OpenAI API connection successful');
    return true;
  } catch (error: any) {
    console.error('OpenAI API connection failed:', error.message);
    if (error.status === 401) {
      console.error('Authentication failed. Please check your API key.');
    }
    return false;
  }
};

// Call verification on startup
verifyApiKey();

// Analyze question
export const analyzeQuestion = handleAsync(async (req: AnalyzeQuestionRequest, res: Response) => {
  try {
    const { questionText, options, selectedAnswer } = req.body;

    if (!questionText || !options || !selectedAnswer) {
      throw new CustomError('Missing required fields', 400);
    }

    const prompt = `
Câu hỏi: ${questionText}

Các đáp án:
${options.map((opt: QuestionOption, index: number) =>
      `${index + 1}. ${opt.text} ${opt.isCorrect ? '(Đáp án đúng)' : ''}`
    ).join('\n')}

Đáp án người dùng chọn: ${selectedAnswer}

Hãy phân tích chi tiết.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: ANALYSIS_SYSTEM_PROMPT },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    // Lấy phản hồi và đảm bảo nó không là null/undefined
    let analysis = completion.choices[0]?.message?.content || "";
    
    // Loại bỏ "undefined" ở cuối nếu có
    analysis = cleanResponseText(analysis);

    if (!analysis.trim()) {
      throw new CustomError('No response from AI', 500);
    }

    // Log để debug
    console.log('Analysis result length:', analysis.length);
    console.log('Analysis result last 20 chars:', analysis.slice(-20));

    return res.status(200).json({
      success: true,
      data: { analysis }
    });

  } catch (error: any) {
    console.error('Error analyzing question:', error);

    // Handle specific OpenAI errors
    if (error.code === 'insufficient_quota') {
      throw new CustomError('API quota exceeded. Please check your billing details.', 429);
    }

    throw new CustomError(
      error.message || 'Failed to analyze question',
      error.status || 500
    );
  }
});

// Answer query
export const answerQuery = handleAsync(async (req: AnswerQueryRequest, res: Response) => {
  try {
    const { userQuery, questionText, selectedAnswer, options } = req.body;

    if (!userQuery || !questionText) {
      throw new CustomError('Missing required fields', 400);
    }

    const context = `
Câu hỏi đang được thảo luận: ${questionText}

${options ? `Các đáp án có sẵn:
${options.map((opt: QuestionOption, index: number) =>
      `${index + 1}. ${opt.text}`
    ).join('\n')}

Đáp án được chọn: ${selectedAnswer}` : ''}

Câu hỏi của học viên: ${userQuery}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: QUERY_SYSTEM_PROMPT },
        { role: "user", content: context }
      ],
      temperature: 0.7,
      max_tokens: 1500
    });

    // Lấy phản hồi và đảm bảo nó không là null/undefined
    let answer = completion.choices[0]?.message?.content || "";
    
    // Loại bỏ "undefined" ở cuối nếu có
    answer = cleanResponseText(answer);

    if (!answer.trim()) {
      throw new CustomError('No response from AI', 500);
    }

    // Log để debug
    console.log('Answer result length:', answer.length);
    console.log('Answer result last 20 chars:', answer.slice(-20));

    return res.status(200).json({
      success: true,
      data: { answer }
    });

  } catch (error: any) {
    console.error('Error answering query:', error);

    // Handle specific OpenAI errors
    if (error.code === 'insufficient_quota') {
      throw new CustomError('API quota exceeded. Please check your billing details.', 429);
    }

    throw new CustomError(
      error.message || 'Failed to answer query',
      error.status || 500
    );
  }
});