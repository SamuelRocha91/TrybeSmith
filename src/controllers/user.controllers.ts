import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from '../utils/jwt';
import userService from '../services/user.service';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  const userLogin = await userService.getUser(username);
  if (!userLogin || !bcrypt.compareSync(password, userLogin.password)) {
    return res.status(401).json(
      {
        message: 'Username or password invalid',
      },
    );
  }

  const { password: pass, ...userWithoutPassword } = userLogin;
  const token = jwt.createToken(userWithoutPassword);
  console.log(token);
  res.status(200).json({ token });
};

export default { login };