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

// System prompts
const ANALYSIS_SYSTEM_PROMPT = `Bạn là một chuyên gia về AWS Certification. 
Hãy phân tích câu hỏi và đáp án theo các khía cạnh sau:
1. Giải thích tại sao đáp án được chọn đúng/sai
2. Các khái niệm AWS chính trong câu hỏi
3. Best practices liên quan
4. Tips để nhớ nội dung này
5. Các services AWS liên quan và cách chúng kết nối với nhau

Hãy trả lời bằng tiếng Việt, chi tiết và dễ hiểu.`;

const QUERY_SYSTEM_PROMPT = `Bạn là một chuyên gia về AWS Certification giúp học viên ôn thi. 
Hãy trả lời câu hỏi của học viên một cách chi tiết, rõ ràng, và đưa ra ví dụ cụ thể nếu cần.
Tập trung vào kiến thức thực tế và các tình huống thường gặp trong kỳ thi.
Hãy trả lời bằng tiếng Việt.`;

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

        const analysis = completion.choices[0]?.message?.content;
        if (!analysis) {
            throw new CustomError('No response from AI', 500);
        }

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

        const answer = completion.choices[0]?.message?.content;
        if (!answer) {
            throw new CustomError('No response from AI', 500);
        }

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