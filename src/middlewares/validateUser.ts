import { Request, Response, NextFunction } from 'express';
import userModel from '../database/models/user.model';

const validateUserId = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json(
      { message: '"userId" is required' },
    );
  }
  if (typeof userId !== 'number') {
    return res.status(422).json(
      { message: '"userId" must be a number' },
    );
  }
  const user = await userModel.findOne({ where: { id: userId } });
  if (!user) {
    return res.status(404).json(
      { message: '"userId" not found' },
    );
  }
  next();
};

export default { validateUserId };