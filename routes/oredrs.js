import express from 'express';
import Orders from '../database/modelOrder.js';

const router = express.Router();
router.get('/', async (req, res, next) => {
  try {
    const orders = await Orders.findAll();
    res.status(200).json({
      status: 'ok',
      orders,
    });
  } catch (err) {
    next(err);
    console.log(err);
  }
});
router.post('/', async (req, res, next) => {
  try {
    const { name, email, price, quantity, description, contacts } = req.body;
    const newOrder = await Orders.create({
      name,
      email,
      price,
      quantity,
      description,
      contacts,
    });
    res.status(201).json({
      status: 'ok',
      order: newOrder,
    });
  } catch (err) {
    next(err);
    console.log(err);
  }
});
export default router;
