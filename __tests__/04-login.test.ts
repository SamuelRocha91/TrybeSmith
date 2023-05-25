import request from 'supertest';
import shell from 'shelljs';
import { runMochaCoverage } from './utils';
import {
  sequelizeCLI,
  getRequirementDescription
} from './assets/constants';
import app from '../src/app';

describe(getRequirementDescription(4), () => {
  beforeAll(() => {
    shell.exec([
      sequelizeCLI.drop,
      sequelizeCLI.create,
      sequelizeCLI.migrate,
      sequelizeCLI.seed
    ].join(' && '),
      { silent: process.env.DEBUG === 'false' });
  });

  it('Será validado que não é possível fazer login sem informar um username', async () => {
    const result = await request(app).post('/login').send({
      password: 'terrível',
    });

    expect(result.statusCode).toEqual(400);
    expect(result.body.message).toEqual('"username" and "password" are required');
  })

  it('Será validado que não é possível fazer login sem informar uma senha', async () => {
    const result = await request(app).post('/login').send({
      username: 'Hagar',
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.message).toEqual('"username" and "password" are required');
  })

  it('Será validado que não é possível fazer login com um username inválido', async () => {
    const result = await request(app).post('/login').send({
      username: 'invalid-username',
      password: 'terrível',
    });
    expect(result.statusCode).toEqual(401);
    expect(result.body.message).toEqual('Username or password invalid');
  })

  it('Será validado que não é possível fazer login com uma senha inválida', async () => {
    const result = await request(app).post('/login').send({
      username: 'Hagar',
      password: 'invalid-password',
    });
    expect(result.statusCode).toEqual(401);
    expect(result.body.message).toEqual('Username or password invalid');
  })

  it('Será validado que é possível fazer login com sucesso', async () => {
    const result = await request(app).post('/login').send({
      username: 'Hagar',
      password: 'terrível',
    });
    expect(result.statusCode).toEqual(200);
    expect(result.body.token).toBeDefined();
  })

  it('Será validado que os testes estão cobrindo pelo menos 70% das camadas `Service` e `Controller`', async () => {
    const { total: { statements } } = await runMochaCoverage();
    
    expect(statements.pct).toBeGreaterThanOrEqual(70);
  });
});
