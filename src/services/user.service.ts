import { NewUser } from 'src/types/User';
import userModel from '../database/models/user.model';

async function getUser(username: string): Promise<NewUser> {
  const user = await userModel.findOne({
    where: {
      username,
    },
  });
  return user?.dataValues;
}

export default { getUser };