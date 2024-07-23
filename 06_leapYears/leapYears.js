// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

// > Leap years are years divisible by four (like 1984 and 2004).
// years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).

const leapYears = function (year) {
  // 1. Check if divisible by 4
  if (year % 4 == 0) {
    // Check if divisible by 400 => true
    if (year % 400 == 0) {
      return true;
      // Check if divisible by 400 and by 100 => false
    } else if (year % 400 !== 0 && year % 100 == 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

console.log(leapYears(1985));
// Do not edit below this line
module.exports = leapYears;
