import request from 'supertest';
import shell from 'shelljs';
import { runMochaCoverage } from './utils';
import {
  sequelizeCLI,
  getRequirementDescription
} from './assets/constants';
import app from '../src/app';
import ProductModel, { ProductSequelizeModel } from '../src/database/models/product.model';

describe(getRequirementDescription(1), () => {
  beforeAll(() => {
    shell.exec([
      sequelizeCLI.drop,
      sequelizeCLI.create,
      sequelizeCLI.migrate,
      sequelizeCLI.seed
    ].join(' && '),
      { silent: process.env.DEBUG === 'false' });
  });

  it('Será validado que é possível cadastrar um produto com sucesso', async () => {
    const newProduct = {
      name: 'Arco Escudo Invejável',
      price: '3 Gemas da Noite',
      orderId: 4
    };
    const response = await request(app).post('/products').send(newProduct);

    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: newProduct.name,
        price: newProduct.price
      })
    );

    const products: ProductSequelizeModel[] = await ProductModel.findAll();

    expect(products).toEqual(
      expect.arrayContaining(
        [expect.objectContaining(newProduct)],
      ),
    );
  });

  it('Será validado que os testes estão cobrindo pelo menos 30% das camadas `Service` e `Controller`', async () => {
    const { total: { statements } } = await runMochaCoverage();
    expect(statements.pct).toBeGreaterThanOrEqual(30);
  });
});
