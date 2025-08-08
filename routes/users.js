import express from 'express';
import Users from '../database/modelUsers.js';
import bcrypt from 'bcrypt';
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
router.post('/root/:id', async (req, res, next) => {
  const id = req.params.id;

  if (+id === 1) {
    try {
      const user = await Users.findOne({ where: { id: +id } });
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.dataValues.password
      );
      res.status(200).json({
        auth: isPasswordValid,
      });
    } catch (err) {
      next(err);
    }
  } else if (+id === 10) {
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    try {
      await Users.create({
        name: req.body.name,
        password: passwordHash,
        description: req.body.description,
        role: req.body.role,
        email: req.body.email,
      });
    } catch (err) {
      console.log('error', err);
      res.status(400).json({
        status: 'New user no created',
      });
    }

    res.status(200).json({
      status: 'New user created',
    });
  } else {
    const user = await Users.findOne({ where: { name: req.body.name } });
    if (user === 'null') next('User not found');

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.get('password')
    );
    console.log('qwerty', isPasswordValid, user.get('password'));
    req.auth = isPasswordValid;
    if (isPasswordValid) {
      res.status(200).json({
        status: 'User logged in',
        auth: req.auth,
      });
    } else {
      res.status(400).json({
        status: 'User no logged in',
        auth: req.auth,
      });
    }
  }
});

export default router;
