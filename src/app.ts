import express from 'express';
import productsController from './controllers/products.controller';
import orderController from './controllers/order.controller';
import userController from './controllers/user.controllers';
import validateProducts from './middlewares/validateProducts';
import jwt from './middlewares/validateJWT';
import validateUser from './middlewares/validateUser';
import validateProductById from './middlewares/validateProductId';

const app = express();

app.use(express.json());

app.post('/login', userController.login);

app.post(
  '/products', 
  validateProducts.validateName,
  validateProducts.validatePrice,
  productsController.saveProducts,
);
// reenvio
app.get('/products', productsController.getProducts);

app.get('/orders', orderController.getOrders);

app.post(
  '/orders',
  jwt.validateJwt,
  validateUser.validateUserId,
  validateProductById.validateProductId,
  orderController.create,
);

export default app;
