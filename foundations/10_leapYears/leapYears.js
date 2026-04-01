const leapYears = function(year) {
  // leap years are divisible by 4
  // however, years divisible by 100 are NOT leap years unless they are divisible by 400
  if (year % 4 == 0){
    if (year % 400 == 0){
      return true;
    }
    else if (year % 100 == 0){
      return false;
    }
    return true;
  }
  else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
