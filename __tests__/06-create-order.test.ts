import request from 'supertest';
import shell from 'shelljs';
import { runMochaCoverage } from './utils';
import {
  sequelizeCLI,
  getRequirementDescription
} from './assets/constants';
import app from '../src/app';
import OrderModel, { OrderSequelizeModel } from '../src/database/models/order.model';
import ProductModel, { ProductSequelizeModel } from '../src/database/models/product.model';

describe(getRequirementDescription(6), () => {
  let token: string;
  beforeEach(async () => {
    shell.exec([
      sequelizeCLI.drop,
      sequelizeCLI.create,
      sequelizeCLI.migrate,
      sequelizeCLI.seed
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });

    const result = await request(app).post('/login').send({
      username: 'Hagar',
      password: 'terrível',
    });
    token = result.body.token;
  });

  it('Será validado que não é possível cadastrar pedidos sem token', async () => {
    const result = await request(app).post('/orders').send({
      productIds: [1, 2],
    });

    expect(result.statusCode).toEqual(401);
    expect(result.body.message).toEqual('Token not found');
  })

  it('Será validado que não é possível cadastrar um pedido com token inválido', async () => {
    const result = await request(app).post('/orders').send({
      productIds: [1, 2],
    }).set('Authorization', 'Bearer 123');

    expect(result.statusCode).toEqual(401);
    expect(result.body.message).toEqual('Invalid token');
  })

  it('Será validado que o campo "userId" é obrigatório', async () => {
    const fakeProductId = 6;
    const result = await request(app).post('/orders').send({
      productIds: [fakeProductId],
    }).set('Authorization', token);

    expect(result.statusCode).toEqual(400);
    expect(result.body.message).toEqual('"userId" is required');
  })

  it('Será validado que o campo "userId" tem o tipo número', async () => {
    const fakeProductId = 6;
    const result = await request(app).post('/orders').send({
      productIds: [fakeProductId],
      userId: '1',
    }).set('Authorization', token);

    expect(result.statusCode).toEqual(422);
    expect(result.body.message).toEqual('"userId" must be a number');
  })

  it('Será validado que o campo "userId" é uma pessoa usuária existente', async () => {
    const fakeProductId = 6;
    const result = await request(app).post('/orders').send({
      productIds: [fakeProductId],
      userId: 99,
    }).set('Authorization', token);

    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toEqual('"userId" not found');
  })

  it('Será validado que o campo "productIds" é obrigatório', async () => {
    const result = await request(app).post('/orders').send({
      userId: 1,
    }).set('Authorization', token);

    expect(result.statusCode).toEqual(400);
    expect(result.body.message).toEqual('"productIds" is required');
  })

  it('Será validado que não é possível criar um pedido com o campo "productIds" não sendo um array', async () => {
    const result = await request(app).post('/orders').send({
      productIds: 'products',
      userId: 1,
    }).set('Authorization', token);

    expect(result.statusCode).toEqual(422);
    expect(result.body.message).toEqual('"productIds" must be an array');
  })

  it('Será validado que não é possível criar um pedido com o campo "productIds" vazio', async () => {
    const result = await request(app).post('/orders').send({
      productIds: [],
      userId: 1,
    }).set('Authorization', token);

    expect(result.statusCode).toEqual(422);
    expect(result.body.message).toEqual('"productIds" must include only numbers');
  })
  
  it('Será validado que é possível criar um pedido com sucesso com 1 item', async () => {
    const loggedUserId = 1;
    const fakeProductId = 6;
    const orderId = 4;
    const fakeProduct = {
      name: 'café sem açúcar daquele naipão',
      price: 'meio pão de queijo',
      orderId,
    };

    await request(app).post('/products').send(fakeProduct);

    const response = await request(app).post('/orders').send({
      productIds: [fakeProductId],
      userId: loggedUserId,
    }).set('Authorization', token);

    expect(response.statusCode).toEqual(201);
    expect(response.body).toBeDefined();
    expect(response.body.userId).toBeDefined();
    expect(response.body.userId).toBe(loggedUserId);
    expect(response.body.productIds).toBeDefined();
    expect(response.body.productIds).toEqual([fakeProductId]);

    const orders: OrderSequelizeModel[] = await OrderModel.findAll();

    expect(orders).toEqual(
      expect.arrayContaining(
        [expect.objectContaining({ userId: loggedUserId, id: 4 })]
      )
    );

    const products: ProductSequelizeModel[] = await ProductModel.findAll();

    expect(products).toEqual(
      expect.arrayContaining(
        [expect.objectContaining({ ...fakeProduct, id: fakeProductId, orderId: 4 })]
      )
    );
  })
  
  it('Será validado que é possível criar um pedido com sucesso com vários itens', async () => {
    const loggedUserId = 1;
    const orderId = 4;
    const fakeProductId = 6;
    const fakeProduct2Id = 7;
    const fakeProduct = {
      name: 'Mate Couro em garrafa de ouro',
      price: '0.5 diamante',
      orderId,
    };
    const fakeProduct2 = {
      name: 'Porção de Falafel +7',
      price: '1 moeda de prata',
      orderId,
    };
  
    await request(app).post('/products').send(fakeProduct);
    await request(app).post('/products').send(fakeProduct2);

    const result = await request(app).post('/orders').send({
      productIds: [fakeProductId, fakeProduct2Id],
      userId: loggedUserId,
    }).set('Authorization', token);

    expect(result.statusCode).toBe(201);
    expect(result.body).toBeDefined();
    expect(result.body.userId).toBeDefined();
    expect(result.body.userId).toBe(loggedUserId);
    expect(result.body.productIds).toBeDefined();
    expect(result.body.productIds).toEqual([fakeProductId, fakeProduct2Id]);

    const orders: OrderSequelizeModel[] = await OrderModel.findAll();

    expect(orders).toEqual(
      expect.arrayContaining(
        [expect.objectContaining({ userId: loggedUserId, id: orderId })]
      )
    );

    const products: ProductSequelizeModel[] = await ProductModel.findAll();

    expect(products).toEqual(
      expect.arrayContaining(
        [
          expect.objectContaining({ ...fakeProduct, id: fakeProductId, orderId }),
          expect.objectContaining({ ...fakeProduct2, id: fakeProduct2Id, orderId }),
        ]
      )
    );
  })
  
  it('Será validado que os testes estão cobrindo pelo menos 90% das camadas `Service` e `Controller`', async () => {
    const { total: { statements } } = await runMochaCoverage();
    
    expect(statements.pct).toBeGreaterThanOrEqual(90);
  });
});
