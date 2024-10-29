import express, { Request, Response, Router } from 'express';
import { getUserProfile, updateUserProfile, updatePassword } from '../../controllers/userController';
import auth from '../../middlewares/authMiddleware';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('User route is working!');
});

router.get('/profile', auth, getUserProfile);
router.post('/profile', auth, updateUserProfile);
router.post('/updatePassword', auth, updatePassword);

export default router;
