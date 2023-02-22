class Candy {
  constructor(name, price) {
  this.name = name;
  this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
};

module.exports = Candy;

// const mars = new Candy('Mars', '1.50');
// console.log(mars);