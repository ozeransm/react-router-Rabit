import express from 'express';
import Users from '../database/modelUsers.js';

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await Users.findAll();

    res.status(200).json({
      status: 'ok',
      users,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
