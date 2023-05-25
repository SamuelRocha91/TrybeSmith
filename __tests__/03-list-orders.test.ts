import request from 'supertest';
import shell from 'shelljs';
import { runMochaCoverage } from './utils';
import {
  sequelizeCLI,
  getRequirementDescription
} from './assets/constants';
import app from '../src/app';

describe(getRequirementDescription(3), () => {
  beforeAll(() => {
    shell.exec([
      sequelizeCLI.drop,
      sequelizeCLI.create,
      sequelizeCLI.migrate,
      sequelizeCLI.seed
    ].join(' && '),
      { silent: process.env.DEBUG === 'false' });
  });

  it('Será validado que é possível listar todos os pedidos com sucesso', async () => {
    const result = await request(app).get('/orders');

    expect(result.statusCode).toEqual(200);
    expect(result.body.length).toEqual(3);
    expect(result.body).toEqual(
      expect.arrayContaining(
        [expect.objectContaining({ id: 1, userId: 1, productIds: expect.arrayContaining([2]) })],
      ),
    );
    expect(result.body).toEqual(
      expect.arrayContaining(
        [expect.objectContaining({ id: 2, userId: 3, productIds: expect.arrayContaining([3, 4]) })],
      ),
    );
    expect(result.body).toEqual(
      expect.arrayContaining(
        [expect.objectContaining({ id: 3, userId: 2, productIds: expect.arrayContaining([5]) })],
      ),
    );
  });

  it('Será validado que os testes estão cobrindo pelo menos 60% das camadas `Service` e `Controller`', async () => {
    const { total: { statements } } = await runMochaCoverage();
    
    expect(statements.pct).toBeGreaterThanOrEqual(60);
  });
});
