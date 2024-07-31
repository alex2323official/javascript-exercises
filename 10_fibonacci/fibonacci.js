const fibonacci = function (positionToCheck) {
  if (positionToCheck < 0) {
    return "OOPS";
  } else {
    let f1 = 0;
    let f2 = 1;
    let currentFibb = 0;
    let fibonnaciTable = [];

    // Add fibonacci to array
    fibonnaciTable.push(f1);
    fibonnaciTable.push(f2);

    for (let i = 1; i <= positionToCheck - 1; i++) {
      // Calc current fibb
      currentFibb = fibonnaciTable[i - 1] + fibonnaciTable[i];
      fibonnaciTable.push(currentFibb);
    }
    return fibonnaciTable[positionToCheck];
  }
};

// TESTS:
console.log(fibonacci(6)); // returns the 4th member of the series: 3  (1, 1, 2, 3)

// Do not edit below this line
module.exports = fibonacci;
