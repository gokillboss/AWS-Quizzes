import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: { id: string };
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.header('x-auth-token');

  if (!token) {
    res.status(401).json({ msg: 'No token, authorization denied' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { user: { id: string } };
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Token verification failed:', err instanceof Error ? err.message : err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authMiddleware;
