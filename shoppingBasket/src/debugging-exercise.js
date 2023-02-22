const Candy = require('./candy');

class ShoppingBasket {

  constructor() {
    this.candies = [];
    this.discount = 0;
  }

  addItem(candy) {
    this.candies.push(candy);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    return this.candies.reduce((total, candy) => 
    total + candy.getPrice(), 0) - this.discount;
    
  }
}

module.exports = ShoppingBasket;

// // Create some candy objects
const candynew = new Candy('Sour Patch Kids', 2.00);


// // Create a shopping basket and add the candies to it
const basket = new ShoppingBasket();
basket.addItem(candynew);

// // Apply a discount of £0.50
basket.applyDiscount(0.5);

// // Get the total price of the candies in the basket
const totalPrice = basket.getTotalPrice();
console.log(totalPrice); // Output: Total price: £1.50