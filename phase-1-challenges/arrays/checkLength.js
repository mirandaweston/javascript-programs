const checkLength = (phoneNum) => {
  if (phoneNum.length <= 10) {
    return true
  }
};

const filterLongNumbers = (phoneNum) => {
  return phoneNum.filter(checkLength);
};

const phoneNumbers = ["1234567890", "123456789", "12345678901", "123-456-7890"];
const filteredNumbers = filterLongNumbers(phoneNumbers);
console.log(filteredNumbers); // ["1234567890", "123456789"]