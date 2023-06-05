import { Request, Response, NextFunction } from 'express';
import verifyToken from '../utils/jwt';

const validateJwt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    verifyToken.verify(authorization);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default { validateJwt };