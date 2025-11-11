const leapYears = function(year) {
    // the year must be divisible by 4
    // years divisible by 100 are not leap years UNLESS they are divisible by 400
    if((year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 400 == 0)){
        return true;
    }
    return false;
};

// console.log(leapYears(2000));
// console.log(leapYears(1996));
// console.log(leapYears(1995));
// console.log(leapYears(1900));



// Do not edit below this line
module.exports = leapYears;
