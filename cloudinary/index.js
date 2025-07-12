import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({ 
  cloud_name: process.env.CL_NAME, 
  api_key: process.env.CL_API_KEY, 
  api_secret: process.env.CL_API_SECRET
});

export default cloudinary;