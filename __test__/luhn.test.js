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

/** Other test cases
 * test('when file is not present. it should write the file with data')
 * test('when file is present. it should append data in the file')
 * test('creditCardController.addDetails with invalid card number')
 * test('creditCardController.addDetails with invalid card number')
 * test('mock creditCardController.creditCardDetails to check return value')
 */