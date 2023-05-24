import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { User } from '../../types/User';

type UserInputtableTypes = Optional<User, 'id'>;
type UserSequelizeModelCreator = ModelDefined<User, UserInputtableTypes>;
export type UserSequelizeModel = Model<User, UserInputtableTypes>;

const UserModel: UserSequelizeModelCreator = db.define('User', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;
