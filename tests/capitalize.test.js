import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.strictEqual(capitalize(""), "")
assert.strictEqual(capitalize('hello'), 'Hello')


console.log('Все тесты пройдены')