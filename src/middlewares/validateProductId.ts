import { Request, Response, NextFunction } from 'express';

const validateProductId = async (req: Request, res: Response, next: NextFunction) => {
  const { productIds } = req.body;
  if (!productIds) {
    return res.status(400).json(
      { message: '"productIds" is required' },
    );
  }
  if (!Array.isArray(productIds)) {
    return res.status(422).json(
      { message: '"productIds" must be an array' },
    );
  }

  if (productIds.length === 0) {
    return res.status(422).json(
      { message: '"productIds" must include only numbers' },
    );
  }
  next();
};

export default { validateProductId };
