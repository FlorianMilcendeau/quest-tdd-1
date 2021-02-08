// rectangle.test.js
const assert = require('assert');
const Rectangle = require('../rectangle');

describe('rectangle', () => {
  it('Should is square', () => {
    assert.ok(new Rectangle(4, 4).isSquare());
  });

  it('Should not square', () => {
    assert.ok(new Rectangle(4, 9).isSquare() === false);
  });

  it('Should return area', () => {
    assert.strictEqual(new Rectangle(13, 7).getArea(), 91);
  });

  it('Should return perimeter', () => {
    assert.strictEqual(new Rectangle(13, 7).getPerimeter(), 40);
  });
});
