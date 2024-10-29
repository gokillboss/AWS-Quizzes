import express, { Request, Response } from 'express';
import quizRoute from './v1/quizRoutes';
import userRoute from './v1/userRoutes';
import authRoute from './v1/authRoutes';
import paymentRoute from './v1/paymentRoutes';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('API v1 is working!');
});

router.use('/quiz', quizRoute);
router.use('/user', userRoute); 
router.use('/auth', authRoute);
router.use('/payment', paymentRoute);

router.get('/protected', authMiddleware, (req: Request, res: Response) => {
    res.send('You are authorized to access this route!');
});

export default router;
