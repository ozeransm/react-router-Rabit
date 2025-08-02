import multer from 'multer';
import path from 'path';
export const isProduction = process.env.NODE_ENV === 'production';
// Шляхи
export const uploadDir = path.join(process.cwd(), 'uploads');

// Налаштування multer
export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 6048576,
  },
});
const render = function () {};
export const upload = multer({ storage });
