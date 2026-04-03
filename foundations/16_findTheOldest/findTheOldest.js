function getAge(person){
  person.yearOfDeath ??= new Date().getFullYear();
  return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(arr) {
  let sortedArr = arr.sort((a, b) => getAge(a) > getAge(b) ? -1 : 1);
  return sortedArr[0];
};


// Do not edit below this line
module.exports = findTheOldest;