const printHello = () => {
  console.log('Hello');
}

// The function given is the same, but it's not
// assigned to a name before using the `const` keyword.

setTimeout(() => {
  console.log(printHello);
}, 2000);

setTimeout(printHello, 3000);