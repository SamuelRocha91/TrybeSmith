import jwt from 'jsonwebtoken';

const segredo = process.env.JWT_SECRET || 'segredo';

type Payload = {
  id: number,
  username: string,
  vocation: string;
  level: number,
};

function createToken(payload: Payload): string {
  const token = jwt.sign(payload, segredo);
  return token;
}

function verify(token: string): Payload {
  const data = jwt.verify(token, segredo) as Payload;
  return data;
}

export default {
  createToken,
  verify,
};