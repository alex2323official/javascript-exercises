// Write a function that simply repeats the string a given number of times:

// ```javascript
// repeatString('hey', 3) // returns 'heyheyhey'
// ```

// This function will take two arguments, `string` and `num`.

const repeatString = function (text, number) {
  let string = "";
  if (number < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < number; i++) {
      string = string + text;
    }
  }
  return string;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
