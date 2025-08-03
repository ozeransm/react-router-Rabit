import express from 'express';
import Product from '../database/modelProducts.js';
import cloudinary from '../cloudinary/index.js';
import fs from 'fs/promises';
import path from 'path';
import { isProduction } from '../type/const.js';
import multer from 'multer';
const upload = multer();
function resolve(p) {
  return path.resolve(process.cwd(), p);
}
const clientPath = resolve('dist/client');
export default function indexRouter(vite) {
  const router = express.Router();

  // router.use((req, res, next) => {
  //   console.log('Запит:', req.url, clientPath);
  //   next();
  // });
  router.get('/all', async (req, res, next) => {
    try {
      const product = await Product.findAll();
      const initialData = product.map((el) => {
        const { id, name, price, description, img } = el.dataValues;
        return { id, name, price, description, img };
      });

      res.status(200).json({
        status: 'ok',
        initialData,
      });
    } catch (err) {
      next(err);
    }
  });
  // POST: Оновити продукт за id
  router.post('/admin', upload.none(), async (req, res, next) => {
    const { id } = req.body;

    try {
      const ProductId = await Product.findByPk(id);

      if (ProductId) {
        await ProductId.update({
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
          img: req.body.img,
        });
      }

      res.status(200).json({ status: 'ok' });
    } catch (error) {
      next(error);
    }
  });

  // DELETE: Видалити продукт + зображення з Cloudinary
  router.delete('/', async (req, res, next) => {
    const { id } = req.body;

    try {
      const ProductId = await Product.findByPk(id);
      if (ProductId) {
        await ProductId.destroy();
        await Promise.all(
          ProductId.img.map(async (url) => {
            const publicId = `rabit/${url.split('/').pop().split('.')[0]}`;
            await cloudinary.uploader.destroy(publicId);
            console.log(`Deleted image with public ID: ${publicId}`);
          })
        );
      }

      res.status(200).json({ status: 'ok' });
    } catch (error) {
      console.error('Error deleting images from Cloudinary:', error);
      next(error);
    }
  });
  //
  // GET
  router.get('/', async (req, res, next) => {
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
        const serverEntry = await import(
          resolve('dist/server/entry.server.js')
        );
        render = serverEntry.render;
      }
      // Send template to render on server and client
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
      return res.status(200).end(htmlNew);
    } catch (error) {
      if (!isProduction && vite?.ssrFixStacktrace) {
        vite.ssrFixStacktrace(error);
      }
      console.error(error.stack);
      res.status(500).end(error.stack);
    }
  });
  router.use(express.static(clientPath));
  return router; // 👈 обов'язково поверни
}
