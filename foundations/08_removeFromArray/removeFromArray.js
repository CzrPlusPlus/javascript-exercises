const removeFromArray = function(arr, ...theArgs) {
  // given the array arr, remove all arguments from the given array
  let resultArray = [];
  arr.forEach((element) => {
    if (!theArgs.includes(element)){
      resultArray.push(element);
    }
  })
  return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
