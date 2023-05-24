import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Excalibur',
        price: '10 peças de ouro',
        order_id: 1
      },
      {
        name: 'Espada Justiceira',
        price: '20 peças de ouro',
        order_id: 1
      },
      {
        name: 'Lira de Orfeu',
        price: '1 peça de ouro',
        order_id: 2
      },
      {
        name: 'Armadura de Aquiles',
        price: '1 peça de ouro',
        order_id: 2
      },
      {
        name: 'Harpa de Dagda',
        price: '15 peças de ouro',
        order_id: 3
      },
    ], {});
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('products', {});
  }
};
