// The goal for this exercise is to create a calculator that does the following:

// add, subtract, get the sum, multiply, get the power, and find the factorial

// In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jest! To see the expected value
// take a look at the spec file that houses the Jest test cases.
// The goal for this exercise is to create a calculator that does the following:

// add, subtract, get the sum, multiply, get the power, and find the factorial

// In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jest! To see the expected value
// take a look at the spec file that houses the Jest test cases.

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let finalSum = 0;
  if (array.length === 0) {
    return finalSum;
  } else {
    finalSum = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return finalSum;
  }
};

const multiply = function (array) {
  let finalSum = 0;
  finalSum = array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
  return finalSum;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (number) {
  let factorialResult = 0;
  let tempArray = [];

  for (let i = number; i > 0; i--) {
    tempArray.push(i);
  }
  tempArray.sort();
  factorialResult = tempArray.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
  return factorialResult;
};

console.log(factorial(6));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
