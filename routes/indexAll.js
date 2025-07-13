import express from 'express';
import Product from '../database/model.js';
const router = express.Router();
router.get('/', async (req, res, next) => {
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

export default router;
