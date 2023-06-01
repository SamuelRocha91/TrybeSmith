import { ServiceReponse } from 'src/types/service.response';
import { Product, ProductArray } from 'src/types/Product';
import productModel from '../database/models/product.model';

async function create(name:string, price:string, orderId: number): 
Promise<ServiceReponse<Product>> {
  await productModel.create({ name, price, orderId });
  const productCreated = await productModel.findOne({ where: { orderId } });
  const newProduct = productCreated?.dataValues;

  return {
    status: 'CREATED',
    data: {
      message: newProduct,
    },
  };
}

async function getProducts(): Promise<ServiceReponse<ProductArray[]>> {
  const productCreated = await productModel.findAll();
  return {
    status: 'CREATED',
    data: {
      message: productCreated,
    },
  };
}
export default { create, getProducts };