import { strict as assert} from 'node:assert';
import capitalize from '../src/capitalize.js';

assert(capitalize("") === "");
console.log('Test 1 Correct')
assert(capitalize('hello') === 'Hello');
console.log('Test 2 Correct')

console.log('Все тесты пройдены')