import express from 'express';
import createError from 'http-errors';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
// Імпорт маршрутів
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import uploadRouter from './routes/upload.js';
// Імпорт бази даних
import sequelize from './database/db.js';
import { isProduction } from './type/const.js';

import compression from 'compression';
import Product from './database/model.js';

//імпорт реакт
let root = process.cwd();
let vite;
// __dirname заміна в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Створення застосунку
const app = express();
/**
 * @type {import('vite').ViteDevServer}
 */

if (!isProduction) {
  const viteModule = await import('vite');

  vite = await viteModule.createServer({
    root,
    server: { middlewareMode: 'ssr' },
  });

  app.use(vite.middlewares);
} else {
  app.use(compression());
}

// Синхронізація бази
sequelize
  .sync()
  .then(() => {
    console.log('Таблиці синхронізовано');
  })
  .catch((err) => {
    console.error('Помилка синхронізації:', err);
  });

// Публічна папка
const publicDir = path.join(__dirname, 'dist/client');
app.use('/dist/client', express.static(publicDir));

// Середовища
app.use(logger('dev'));
app.options('*', cors());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Маршрути

app.use('/', indexRouter(vite));
// app.use('/', indexRouter(vite));
app.use('/upload', uploadRouter);
// app.use('/users', usersRouter);

// Обробка 404
app.use((req, res, next) => {
  next(createError(404));
});

// Обробка помилок
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Але якщо без шаблонізатора — просто JSON:
  res.status(err.status || 500).json({
    error: res.locals.error,
    message: res.locals.message,
  });
});

export default app;
