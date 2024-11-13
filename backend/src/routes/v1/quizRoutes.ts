import express, { Request, Response, Router } from 'express';
import { getQuizzes, getQuizById, createQuiz, submitQuiz } from '../../controllers/quizController';
import auth from '../../middlewares/authMiddleware';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Quiz route is working!');
});

router.get('/all',auth, getQuizzes);
router.get('/:id', auth, getQuizById);
router.post('/', auth, createQuiz);
router.post('/:id/submit', auth, submitQuiz);

export default router;
