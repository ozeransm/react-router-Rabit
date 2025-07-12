import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('neondb', 'neondb_owner', 'npg_wTPiO29vZztH', {
  host: 'ep-cold-term-a90qnt27-pooler.gwc.azure.neon.tech',
  dialect: 'postgres',
  port: 5432,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

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