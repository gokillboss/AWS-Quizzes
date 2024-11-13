import express, { Request, Response } from 'express';
import { resetPasswordLimiter, loginLimiter, signupLimiter } from '../../middlewares/rateLimit';
import { signup, login, findPassword, resetPassword, confirmEmail } from '../../controllers/authController';

const router = express.Router();

// Kiểm tra route Auth
router.get('/', (req: Request, res: Response) => {
    res.send('Auth route is working!');
});

// Định nghĩa các route
router.post('/signup', signupLimiter, signup);
router.post('/login', loginLimiter, login);
router.get('/confirm/:token', confirmEmail);
router.post('/findPassword', findPassword);
router.post('/resetPassword/:token', resetPassword);

export default router;
