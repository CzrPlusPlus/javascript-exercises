const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((acc, number) => acc + number, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, number) => acc * number, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i <= num; i++){
    result *= i;
  }
  return result;
};

// let a = [1, 2, 3, 4, 5];
// let b = [10, 20, 30];
// console.log(sum(a));
// console.log(sum(b));
// console.log(multiply(a));
// console.log(multiply(b));
// console.log(power(2, 6));
// console.log(factorial(5));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
