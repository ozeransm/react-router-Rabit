import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'cards.json');

export async function readFJ() {
  const list = await fs.readFile(filePath, 'utf8');
  return JSON.parse(list);
}

export async function writeFJ(jsonData) {
  try {
    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
    console.log('File has been updated');
  } catch (err) {
    console.error('Error writing JSON file:', err);
  }
}
export default {
  readFJ,
  writeFJ
};