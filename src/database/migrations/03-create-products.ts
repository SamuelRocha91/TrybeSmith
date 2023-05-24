import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Product } from 'src/types/Product';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Product>>('products', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'order_id',
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('products');
  }
};
