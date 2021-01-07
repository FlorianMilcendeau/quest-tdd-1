const assert = require('chai').assert;

const { capitalizeFirstLetter } = require('./capitalizeFirst');

assert.typeOf(capitalizeFirstLetter, 'function');
assert.strictEqual(
  capitalizeFirstLetter('i am learning TDD'),
  'I Am Learning TDD'
);
assert.strictEqual(capitalizeFirstLetter('hello'), 'Hello');
assert.strictEqual(capitalizeFirstLetter(''), '');
