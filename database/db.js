import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize(
  process.env.NAME_DB,
  'neondb_owner',
  process.env.PASS_DB,
  {
    host: process.env.HOST_DB,
    dialect: 'postgres',
    port: 5432,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Підключення до бази даних успішно встановлено.');
  } catch (err) {
    console.error('Не вдалося підключитися до бази даних:', err);
  }
}

testConnection();

export default sequelize;
