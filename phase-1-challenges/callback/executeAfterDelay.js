const printHello = () => {
  console.log('Hello');
}

const executeAfterDelay = (delay, func) => {
  setTimeout(delay * 1000, func);
}

executeAfterDelay(5, printHello);

// After about 5 seconds, you should see the message being logged

module.exports = {
  executeAfterDelay,
  printHello,
};