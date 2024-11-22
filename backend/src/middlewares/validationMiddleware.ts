// src/middlewares/validationMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/customError';

export const validateAIRequest = (requiredFields: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return next(new CustomError(`Missing required field: ${field}`, 400));
            }
        }
        next();
    };
};