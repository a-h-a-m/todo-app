// lib/sequelize.js
import { Sequelize } from 'sequelize';
import { mysql2 } from 'mysql2';

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    dialectModule: mysql2,
    port: process.env.MYSQL_PORT
  }
);

export default sequelize;
