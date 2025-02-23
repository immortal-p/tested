import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import reverse from '../src/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse-test1', () => {
      const data = readFixtureFile('logo.txt').trim();
      const result = readFixtureFile('result.txt').trim();

      expect(reverse(data)).toEqual(result)
})      

test('reverse-test2', () => {
      expect(reverse('')).toEqual('')
}) 


