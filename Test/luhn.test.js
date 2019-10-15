const luhn = require('../Validator/luhnCheck');

test('Success Luhn Check ', () => {
    expect(luhn.luhn10Check('4916422822484260567')).toBe(true);
});

test('Failed Luhn Check ', () => {
    expect(luhn.luhn10Check('49164228')).toBe(false);
});

test('Failed Luhn Check with alpha value', () => {
    expect(luhn.luhn10Check('abcd')).toBe(false);
});

test('Failed Luhn Check with null ', () => {
    expect(luhn.luhn10Check(null)).toBe(false);
});