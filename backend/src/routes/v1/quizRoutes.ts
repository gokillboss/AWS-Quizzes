import express, { Request, Response, Router } from 'express';
import { getTests, getTestById, createTest, submitTest } from '../../controllers/quizController';
import auth from '../../middlewares/authMiddleware';

const router: Router = express.Router();

router.get('/quiz', (req: Request, res: Response) => {
    res.send('Quiz route is working!');
});

router.get('/', auth, getTests);
router.get('/:id', auth, getTestById);
router.post('/', auth, createTest);
router.post('/:id/submit', auth, submitTest);

export default router;
