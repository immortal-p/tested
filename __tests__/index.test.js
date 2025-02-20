import fs, { readFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import reverse from '../src/index.js'

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


test('reverse', () => {
      expect(reverse('kels')).toEqual('slek');
      expect(reverse('')).toEqual('');
})

test('reverse with log text', () => {
      const txt = readFixtureFile('data.txt').trim();
      const expected = readFixtureFile('result.txt').trim();

      expect(reverse(txt)).toEqual(expected);
})