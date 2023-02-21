// file: rectangle.js

class Rectangle {

  // A constructor, to give initial arguments.
  constructor(height, width) {

    // We can define attributes stored on the instance with `this`
    this.height = height;
    this.width = width;
  }

  // A method.
  getArea() {
    return this.height * this.width;
  }
}

// Export the class
module.exports = Rectangle;

// In the REPL

// const Rectangle = require('./rectangle');

// and use it to create new instances
const rect = new Rectangle(4, 10);

rect.getArea(); // 40