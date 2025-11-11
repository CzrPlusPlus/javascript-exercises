const convertToCelsius = function(tempInF) {
  let num = ((tempInF - 32) * (5/9));
  return Math.round(num * 10) / 10;
};

const convertToFahrenheit = function(tempInC) {
  let num = ((tempInC * (9/5)) + 32);
  return Math.round(num * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
