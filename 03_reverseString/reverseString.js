// Pretty simple, write a function called `reverseString` that returns its input, reversed!

// ```javascript
// reverseString('hello there') // returns 'ereht olleh'

const reverseString = function (text) {
  let reversedText = "";
  for (i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
