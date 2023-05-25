import request from 'supertest';
import { runMochaCoverage } from './utils';
import {
  getRequirementDescription
} from './assets/constants';
import app from '../src/app';
import sequelize from '../src/database/models/index';

jest.mock('../src/database/models/product.model', () => {
  const connectionError = new Error('Neste requisito de validação, não é necessário conectar com o banco de dados');
  return {
    sequelize: {
      authenticate: jest.fn().mockRejectedValue(connectionError),
      define: jest.fn(),
    }
  };
});

describe(getRequirementDescription(5), () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('Será validado que não é possível cadastrar um produto sem informar um "name"', async () => {
    const result = await request(app).post('/products').send({
      price: 'price',
    })

    expect(result.statusCode).toEqual(400);
    expect(result.body.message).toEqual('"name" is required');
  })

  it('Será validado que não é possível cadastrar um produto sem informar um "price"', async () => {
    const result = await request(app).post('/products').send({
      name: 'punhal de mithril',
    });

    expect(result.statusCode).toEqual(400);
    expect(result.body.message).toEqual('"price" is required');
  })

  it('Será validado que não é possível cadastrar um produto se "name" não for uma string', async () => {
    const result = await request(app).post('/products').send({
      name: 1,
      price: 'price',
    })

    expect(result.statusCode).toEqual(422);
    expect(result.body.message).toEqual('"name" must be a string');
  })

  it('Será validado que não é possível cadastrar um produto se "price" não for uma string', async () => {
    const result = await request(app).post('/products').send({
      name: 'espada élfica',
      price: 1,
    })

    expect(result.statusCode).toEqual(422);
    expect(result.body.message).toEqual('"price" must be a string');
  })

  it('Será validado que não é possível cadastrar um produto se "name" tiver menos de 3 caracteres', async () => {
    const result = await request(app).post('/products').send({
      name: 'ar',
      price: '10 peças de prata',
    })

    expect(result.statusCode).toEqual(422);
    expect(result.body.message).toEqual('"name" length must be at least 3 characters long');
  })

  it('Será validado que não é possível cadastrar um produto se "price" tiver menos de 3 caracteres', async () => {
    const result = await request(app).post('/products').send({
      name: 'espada élfica',
      price: 'um',
    })

    expect(result.statusCode).toEqual(422);
    expect(result.body.message).toEqual('"price" length must be at least 3 characters long');
  })

  it('Será validado que os testes estão cobrindo pelo menos 80% das camadas `Service` e `Controller`', async () => {
    const { total: { statements } } = await runMochaCoverage();
    
    expect(statements.pct).toBeGreaterThanOrEqual(80);
  });
});
