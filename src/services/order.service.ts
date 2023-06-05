import { ServiceReponse } from 'src/types/service.response';
import { OrderArray } from 'src/types/Order';
import orderModel from '../database/models/order.model';
import productModel from '../database/models/product.model';

async function getOrders(): Promise<ServiceReponse<OrderArray[]>> {
  const orderCreated = await orderModel.findAll({
    include: [{ model: productModel, as: 'productIds', attributes: ['id'] }],
  });   

  const newOrder = orderCreated.map((ord) => ({
    id: ord.dataValues.id, 
    productIds: ord.dataValues.productIds?.map((p : { id: number }) => 
      p.id), 
    userId: ord.dataValues.userId, 
  }));
  return {
    status: 'CREATED',
    data: {
      message: newOrder },
  };
}

async function createOrder(userId: number): Promise<boolean> {
  await orderModel.create({ userId });
  return true;
}
export default { getOrders, createOrder };