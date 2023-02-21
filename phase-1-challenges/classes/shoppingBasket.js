class ShoppingBasket {

  constructor(basket) {
    this.basket = basket;
  }

  getTotalPrice() {
    return this.basket.map(candy => candy.getPrice());
  }

  addItem() {
    return this.basket.concat(candy)
  }
};

module.exports = ShoppingBasket;