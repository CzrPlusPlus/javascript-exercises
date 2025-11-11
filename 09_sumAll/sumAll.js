const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    // numbers must be positive integers
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    let sum = 0;
    // console.log(sum);
    if (num1 < num2){
        // calculate sum starting at num1 and return sum
        for (let i = num1; i <= num2; i++){
            sum += i;
            // console.log(sum);
        }
        return sum;
    }
    else {
        // calculate sum starting at num2 and return sum
        for (let i = num2; i <= num1; i++){
            sum += i;
        }
        return sum;
    }

};

// console.log(sumAll(3, 8));
// console.log(sumAll(8, 3));
// console.log(sumAll(2, 4));
// console.log(sumAll(2, 5));

// Do not edit below this line
module.exports = sumAll;
