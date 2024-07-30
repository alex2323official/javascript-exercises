const palindromes = function (stringToCheck) {
  const tempArray = [];
  let tempString = "";
  stringToCheck = stringToCheck.toLowerCase();
  for (let i = 0; i < stringToCheck.length; i++) {
    // console.log(stringToCheck[i]);
    if (
      stringToCheck[i] != " " &&
      stringToCheck[i] != "," &&
      stringToCheck[i] != "-" &&
      stringToCheck[i] != "!" &&
      stringToCheck[i] != "."
    ) {
      tempArray.push(stringToCheck[i]);
    }
  }
  tempString = tempArray.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue);
  });
  // test if tempString is === to reverse tempString
  if (tempString == tempString.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
