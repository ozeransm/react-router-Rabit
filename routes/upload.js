import express from 'express';
import { upload } from '../type/const.js';
import Product from '../database/modelProducts.js';
import filesHandler from './hundler/filesHahdler.js';
import cloudinary from '../cloudinary/index.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

router.post('/', upload.array('files', 15), async (req, res) => {
  const img = await filesHandler();

  await Product.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    img,
  });
  res.status(200).json({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    img,
  });
});

router.post('/:id', upload.array('files', 15), async (req, res) => {
  const id = +req.params.id;
  const imgOld = req.body.img.split(',');
  const img = await filesHandler();
  const image = [...img, ...imgOld];
  try {
    //
    await Product.update(
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        img: image,
      },
      {
        where: { id },
        logging: console.log,
      }
    );

    res.status(200).json({ message: 'new pictures added' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'update error' });
  }
});

router.delete('/cloudinary', (req, res) => {
  const url = req.body.img;
  cloudinary.uploader.destroy(
    `rabit/${url.split('/').pop().split('.')[0]}`,
    function (error, result) {
      console.log(result, error);
    }
  );

  res.status(200).json({ message: 'image deleted' });
});

export default router;
