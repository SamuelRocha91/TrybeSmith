import { QueryInterface } from 'sequelize';
import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        username: 'Hagar',
        vocation: 'Guerreiro',
        level: 10,
        password: bcrypt.hashSync('terrível', SALT_ROUNDS),
      },
      {
        username: 'Eddie',
        vocation: 'Guerreiro',
        level: 8,
        password: bcrypt.hashSync('sortudo', SALT_ROUNDS),
      },
      {
        username: 'Helga',
        vocation: 'Curandeira',
        level: 9,
        password: bcrypt.hashSync('valquíria', SALT_ROUNDS),
      },
    ], {});
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('users', {});
  }
};
