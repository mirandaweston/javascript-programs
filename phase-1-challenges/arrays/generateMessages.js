const checkLength = (phoneNum) => {
  if (phoneNum.length <= 10) {
    return true
  }
};

const filterLongNumbers = (phoneNum) => {
  return phoneNum.filter(checkLength);
};

// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

//const generateMessages = (names) => {
  //return names.map(name => `Hi ${name}! 50% off our best candies for you today!`);
//};

// console.log(generateMessages(names));

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (name) => {
  return `Hi ${name.name}! ${name.discount}% off our best candies for you today!`;
};

console.log(messages = namesAndDiscounts.map(generateMessages))