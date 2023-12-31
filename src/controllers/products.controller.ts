import { Request, Response } from 'express';
import productService from '../services/products.service';

async function saveProducts(req: Request, res: Response): Promise<Response> {
  const { name, orderId, price } = req.body;
  const serviceResponse = await productService.create(name, price, orderId);
 
  return res.status(201).json(serviceResponse.data.message);
}

async function getProducts(req: Request, res: Response): Promise<Response> {
  const serviceResponse = await productService.getProducts();
  return res.status(200).json(serviceResponse.data.message);
} 

export default {
  saveProducts,
  getProducts,
};