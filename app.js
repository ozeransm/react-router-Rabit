import express from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import fs from 'fs/promises';
// Імпорт маршрутів
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import uploadRouter from './routes/upload.js';
import ordersRouter from './routes/oredrs.js';
// Імпорт бази даних
import sequelize from './database/db.js';
import { isProduction } from './type/const.js';

import compression from 'compression';
import Product from './database/modelProducts.js';

//імпорт реакт
let root = process.cwd();
let vite;

function resolve(p) {
  return path.resolve(process.cwd(), p);
}

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
// const publicDir = path.join(__dirname, 'dist/client');
// app.use('/dist/client', express.static(publicDir));

// Середовища
app.use(logger('dev'));
app.options('*', cors());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Маршрути

app.use('/', indexRouter(vite));
app.use('/upload', uploadRouter);
app.use('/users', usersRouter);
app.use('/order', ordersRouter);
app.get('*', async (req, res, next) => {
  const url = req.originalUrl;
  try {
    const product = await Product.findAll();

    let template;
    let render;

    if (!isProduction) {
      template = await fs.readFile(resolve('index.html'), 'utf8');
      template = await vite.transformIndexHtml(url, template);
      render = await vite
        .ssrLoadModule('src/entry.server.tsx')
        .then((m) => m.render);
    } else {
      template = await fs.readFile(resolve('dist/client/index.html'), 'utf8');
      const serverEntry = await import(resolve('dist/server/entry.server.js'));
      render = serverEntry.render;
    }

    const initialData = product.map((el) => {
      const { id, name, price, description, img } = el.dataValues;
      return { id, name, price, description, img };
    });

    const jsonString = JSON.stringify(initialData);
    const { html, styleTags } = render(url, initialData);

    const htmlNew = template
      .replace('<!--app-html-->', html)
      .replace('</head>', `${styleTags}</head>`)
      .replace(
        '</body>',
        `<script>window.__INITIAL_PRODUCTS__ = ${jsonString}</script></body>`
      );

    res.setHeader('Content-Type', 'text/html');
    res.status(200).end(htmlNew);
  } catch (error) {
    if (!isProduction && vite?.ssrFixStacktrace) {
      vite.ssrFixStacktrace(error);
    }
    console.error(error.stack);
    res.status(500).end(error.stack);
  }
});

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
