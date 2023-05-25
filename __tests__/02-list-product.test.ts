import request from 'supertest';
import shell from 'shelljs';
import { runMochaCoverage } from './utils';
import {
  sequelizeCLI,
  getRequirementDescription
} from './assets/constants';
import app from '../src/app';

describe(getRequirementDescription(2), () => {
  beforeAll(() => {
    shell.exec([
      sequelizeCLI.drop,
      sequelizeCLI.create,
      sequelizeCLI.migrate,
      sequelizeCLI.seed
    ].join(' && '),
      { silent: process.env.DEBUG === 'false' });
  });

  it('Será validado que é possível listar todos os produtos com sucesso', async () => {
    const products = [
      {
        id: 1,
        name: 'Excalibur',
        price: '10 peças de ouro',
        orderId: 1
      },
      {
        id: 2,
        name: 'Espada Justiceira',
        price: '20 peças de ouro',
        orderId: 1
      },
      {
        id: 3,
        name: 'Lira de Orfeu',
        price: '1 peça de ouro',
        orderId: 2
      },
      {
        id: 4,
        name: 'Armadura de Aquiles',
        price: '1 peça de ouro',
        orderId: 2
      },
      {
        id: 5,
        name: 'Harpa de Dagda',
        price: '15 peças de ouro',
        orderId: 3
      }
    ];

    const result = await request(app).get('/products');

    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeDefined();
    expect(result.body.length).toEqual(5);
    expect(result.body).toStrictEqual(products);
  });

  it('Será validado que os testes estão cobrindo pelo menos 50% das camadas `Service` e `Controller`', async () => {
    const { total: { statements } } = await runMochaCoverage();
    
    expect(statements.pct).toBeGreaterThanOrEqual(50);
  });
});
