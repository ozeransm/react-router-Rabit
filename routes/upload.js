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
    img: img.join(',')
  });
  res.status(200).json({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    img: img.join(',')
  });
});

router.patch('/:id', upload.array('files', 15), async (req, res)=>{
  const img = await filesHandler();
  const imgOld=req.body.img+','+img.join(',');
  try {
    await Product.update(
      { img: imgOld },
      { where: { id: req.params.id } }
    );

    res.status(200).json({ message: "new pictures added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "update error" });
  }
})
export default router;
