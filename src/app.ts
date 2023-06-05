import express from 'express';
import productsController from './controllers/products.controller';
import orderController from './controllers/order.controller';
import userController from './controllers/user.controllers';
import validateProducts from './middlewares/validateProducts';

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

export default app;
