import capitalize from '../src/capitalize.js';

if(capitalize('hello') !== 'Hello'){
    throw new Error('Функция работает неверно');
}

if(capitalize('') !== '') {
    throw new Error('Функця работает неверно');
}

console.log('Все тесты пройдены')