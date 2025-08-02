import express from 'express';
import createError from 'http-errors';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import fs from 'fs/promises';
import { resolve } from 'path';
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
const publicDir = path.join(__dirname, 'public');
app.use('/public', express.static(publicDir));

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
// app.use('/all', indexRouterAll);
app.use('/upload', uploadRouter);
// app.use('/users', usersRouter);
// app.get('*', async (req, res) => {
//   const url = req.originalUrl;

//   try {
//     let template;
//     let render;

//     if (!isProduction) {
//       template = await fs.readFile(resolve('index.html'), 'utf-8');
//       template = await vite.transformIndexHtml(url, template);
//       render = await vite.ssrLoadModule('/src/entry.server.tsx').then((m) => m.render);
//     } else {
//       template = await fs.readFile(resolve('dist/client/index.html'), 'utf-8');
//       const { render: ssrRender } = await import(resolve('dist/server/entry.server.js'));
//       render = ssrRender;
//     }

//    const product = await Product.findAll();
//     const initialData = product.map(({ dataValues }) => {
//       const { id, name, price, description, img } = dataValues;
//       return { id, name, price, description, img };
//     });

//    const { html, styleTags } = render(url, initialData);

//     const finalHtml = template
//       .replace('<!--app-html-->', html)
//       .replace('</head>', `${styleTags}</head>`)
//       .replace(
//         '</body>',
//         `<script>window.__INITIAL_PRODUCTS__ = ${JSON.stringify(initialData)};</script></body>`
//       );

//     res.setHeader('Content-Type', 'text/html');
//     res.status(200).end(finalHtml);
//   } catch (err) {
//     console.error('🔥 SSR rendering failed:', err.stack || err);
//     res.status(500).end('Internal Server Error');
//   }
// });

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
