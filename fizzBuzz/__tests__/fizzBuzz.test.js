const fizzBuzz = require('../src/fizzBuzz');

describe('fizzBuzz', () => {
  it('returns fizzBuzz if number is divisible by 5 and 3', () => {
    expect(fizzBuzz(15)).toBe('fizzBuzz');
  });

  it('returns Fizz if number is divisible by 3', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
  });

  it('returns Buzz if number is divisible by 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });
});