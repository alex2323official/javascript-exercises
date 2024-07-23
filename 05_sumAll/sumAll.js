// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

const sumAll = function (numberStart, numberEnd) {
  let numberStartParsed, numberEndParsed;

  // Parsing input: check for negative number, if you find throw ERROR
  if (
    numberStart < 0 ||
    numberEnd < 0 ||
    numberStart % 1 != 0 ||
    numberEnd % 1 != 0 ||
    typeof numberStart !== "number" ||
    typeof numberEnd !== "number"
  ) {
    return "ERROR";
    // Parsing input: if you don't find negative number go along with code
  } else {
    //   Parsing input: check for first big number and assing it to proper variable.
    if (numberStart > numberEnd) {
      numberStartParsed = numberEnd;
      numberEndParsed = numberStart;
    } else {
      numberStartParsed = numberStart;
      numberEndParsed = numberEnd;
    }

    // Calc start and end
    let sumAllValue = numberStartParsed + numberEndParsed;

    //   1. Loop trough numbers start and end
    for (let i = numberStartParsed + 1; i < numberEndParsed; i++) {
      sumAllValue += i;
    }

    return sumAllValue;
  }
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
