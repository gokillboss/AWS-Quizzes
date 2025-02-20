import express, { Request, Response } from 'express';
import quizRoute from './v1/quizRoutes';
import userRoute from './v1/userRoutes';
import authRoute from './v1/authRoutes';
import paymentRoute from './v1/paymentRoutes';
import authMiddleware from '../middlewares/authMiddleware';
import aiRoutes from './v1/aiRoutes';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('API v1 is working!');
});

// Use the correct path prefix
router.use('/quiz', quizRoute); 
router.use('/user', userRoute); 
router.use('/auth', authRoute);
router.use('/payment', paymentRoute);
router.use('/ai', aiRoutes);

router.get('/protected', authMiddleware, (req: Request, res: Response) => {
    res.send('You are authorized to access this route!');
});

export default router;
