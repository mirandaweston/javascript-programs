const Candy = require('../src/candy');

describe('candy', () => {
  it('constructs', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.name).toBe('Mars');
    expect(candy.price).toBe(4.99);
  });

  it('returns name of candy', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toBe('Mars');
  });

  it('returns price of candy', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toBe(4.99);
  });
});