const ShoppingBasket = require('../src/shoppingBasket');
const Candy = require('../src/candy');

describe('shoppingBasket', () => {
  it('constructs', () => {
    const basket = new ShoppingBasket();
    expect(basket.items).toEqual([]);
  })

  it('adds one item and returns price', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
    
    const candyDouble = {
      getName: () => 'Bounty',
      getPrice: () => 3.99,
    };
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toBe(3.99);
  });

  it('returns 0 if shopping basket is empty', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });
})