import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function getOrders(req: Request, res: Response): Promise<Response> {
  const serviceResponse = await orderService.getOrders();
  return res.status(200).json(serviceResponse.data.message);
} 

async function create(req: Request, res: Response): Promise<Response> {
  const { userId, productIds } = req.body;
  await orderService.createOrder(userId);
  return res.status(201).json({ userId, productIds });
} 
export default { getOrders, create };