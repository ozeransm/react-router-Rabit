import express from 'express';
import Users from '../database/modelUsers.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
function createToken(id) {
  const payload = {
    id,
  };
  const token = jwt.sign(payload, secret, { expiresIn: '1m' });

  return token;
}

const router = express.Router();
const secret = process.env.TOKEN_SECRET;
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
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await Users.findOne({ where: { id: +id } });
    res.status(200).json({
      user: user,
    });
  } catch (err) {
    console.log('error', err);
    res.status(404).json({
      message: 'not found',
    });
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
      auth: true,
    });
  } else {
    const user = await Users.findOne({ where: { name: req.body.name } });
    if (user === null) {
      res.status(404).json({
        status: 'User not found',
        auth: false,
      });
      return;
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.get('password')
    );
    req.auth = isPasswordValid;

    if (isPasswordValid) {
      res.status(200).json({
        status: 'User logged in',
        auth: req.auth,
        id: user.dataValues.id,
        role: user.dataValues.role,
        token: createToken(user.dataValues.id),
      });
    } else {
      res.status(400).json({
        status: 'User no logged in',
        auth: req.auth,
      });
    }
  }
});
router.delete('/:name', async (req, res, next) => {
  const name = req.params.name;

  try {
    const user = await Users.findOne({ where: { name } });
    const isPasswordValid = await bcrypt.compare(
      req.body.pass,
      user.get('password')
    );
    if (user && isPasswordValid) {
      await user.destroy();
      res.status(200).json({ status: 'user deleted', auth: true });
    }
  } catch (err) {
    console.log('error', err);
    next(err);
  }
});
export default router;
