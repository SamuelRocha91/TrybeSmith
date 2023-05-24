import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('orders', [
      {
        user_id: 1,
      },
      {
        user_id: 3,
      },
      {
        user_id: 2
      },
    ], {});
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('orders', {});
  }
};
