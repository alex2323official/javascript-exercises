// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// ```
// convertToCelsius(32) // fahrenheit to celsius, should return 0

// convertToFahrenheit(0) // celsius to fahrenheit, should return 32
// ```

// Because we are human, we want the result temperature to be rounded to one decimal place: i.e., `convertToCelsius(100)` should return `37.8` and not `37.77777777777778`.

// 1. Fahrenheit to Celcius
// °C = (°F - 32) × 5/9
const convertToCelsius = function (fahrenheitInput) {
  let celcius = 0;
  celcius = (fahrenheitInput - 32) * (5 / 9);
  celcius = Math.round(celcius * 10) / 10;
  return celcius;
};

// 2. Celcius to Fahrenheit
// Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32
const convertToFahrenheit = function (celciusInput) {
  let fahrenheit = 0;
  fahrenheit = celciusInput * (9 / 5) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

console.log(convertToFahrenheit(25));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
