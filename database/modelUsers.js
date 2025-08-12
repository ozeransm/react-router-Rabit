import { DataTypes } from 'sequelize';
import sequelize from './db.js';

const Users = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      // unique: true,
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

export default Users;
