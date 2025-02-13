import capitalize from '../src/capitalize.js';

test('capitalize', () => {
    expect(capitalize('frik')).toEqual('Frik');
    expect(capitalize('')).toEqual('');
})