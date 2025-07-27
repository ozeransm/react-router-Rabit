import express from 'express';
import path from 'path';
import fs from 'fs';
import { uploadDir } from '../type/const.js';
import { upload } from '../type/const.js';

import Product from '../database/model.js';
import cloudinary from '../cloudinary/index.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

router.post('/', upload.array('files', 15), async (req, res) => {
  const files = fs.readdirSync(uploadDir);
  const urlAllImg = [];

  if (files.length === 0) {
    console.log('No files found in the uploads directory.');
    return res.status(400).json({ status: 'no_files' });
  }

  for (const file of files) {
    const filePath = path.join(uploadDir, file);
    try {
      const uploadResult = await cloudinary.uploader.upload(filePath, {
        folder: 'rabit',
        transformation: [{ width: 300, height: 400, crop: 'fill' }],
      });

      console.log(uploadResult);
      if (uploadResult?.url) {
        urlAllImg.push(uploadResult.url);
      }
    } catch (error) {
      console.error('Cloudinary upload error:', error.message);
    }
  }

  // Зберігаємо продукт у базі
  await Product.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    img: urlAllImg.join(','),
  });

  // Видалити всі файли після завантаження
  try {
    for (const file of files) {
      const filePath = path.join(uploadDir, file);
      if (fs.statSync(filePath).isFile()) {
        fs.unlinkSync(filePath);
        console.log(`Deleted file: ${file}`);
      }
    }
    console.log('All files in the uploads directory have been deleted.');
  } catch (error) {
    console.error('Error clearing the uploads directory:', error.message);
  }

  res.status(200).json({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    img: urlAllImg.join(','),
  });
});

export default router;
