import { ServiceReponse } from 'src/types/service.response';
import { OrderArray } from 'src/types/Order';
import orderModel from '../database/models/order.model';
import productModel from '../database/models/product.model';

async function getOrders(): Promise<ServiceReponse<OrderArray[]>> {
  const orderCreated = await orderModel.findAll({
    include: [{ model: productModel, as: 'productIds', attributes: ['id'] }],
  });   
  console.log(orderCreated);
  return {
    status: 'CREATED',
    data: {
      message: orderCreated },
  };
}
export default { getOrders };