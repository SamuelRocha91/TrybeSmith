import { Request, Response, NextFunction } from 'express';

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json(
      { message: '"name" is required' },
    );
  }
  if (typeof name !== 'string') {
    return res.status(422).json(
      { message: '"name" must be a string' },
    );
  }
  if (name.length <= 2) {
    return res.status(422).json(
      { message: '"name" length must be at least 3 characters long' },
    );
  }
  next();
};

const validatePrice = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;

  if (!price) {
    return res.status(400).json(
      { message: '"price" is required' },
    );
  }
  if (typeof price !== 'string') {
    return res.status(422).json(
      { message: '"price" must be a string' },
    );
  }
  if (price.length <= 2) {
    return res.status(422).json(
      { message: '"price" length must be at least 3 characters long' },
    );
  }
  return next();
};

export default {
  validateName,
  validatePrice,
};