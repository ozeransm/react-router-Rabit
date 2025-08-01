import express from 'express';
import { upload } from '../type/const.js';
import Product from '../database/model.js';
import filesHandler from './hundler/filesHahdler.js';
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
  console.log('asasdfafdsafdfdsds', id, image);
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
export default router;
