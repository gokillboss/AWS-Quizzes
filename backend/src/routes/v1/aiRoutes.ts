// src/routes/v1/aiRoutes.ts
import express from 'express';
import { analyzeQuestion, answerQuery } from '../../controllers/aiController';
import authMiddleware from '../../middlewares/authMiddleware';
import { validateAIRequest } from '../../middlewares/validationMiddleware';

const router = express.Router();

// Middleware để validate requests
const validateAnalyzeRequest = validateAIRequest(['questionText', 'options', 'selectedAnswer']);
const validateQueryRequest = validateAIRequest(['userQuery', 'questionText']);

// Routes với auth middleware
router.post('/analyze', authMiddleware, validateAnalyzeRequest, analyzeQuestion);
router.post('/query', authMiddleware, validateQueryRequest, answerQuery);

export default router;