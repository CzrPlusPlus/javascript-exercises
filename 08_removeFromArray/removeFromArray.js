const removeFromArray = function(array, ...args) {
    let result = [];
    let duplicate;
    for (let i = 0; i < array.length; i++){
        duplicate = false;
        for (let j = 0; j < args.length; j++){
            if (array[i] === args[j]){
                duplicate = true;
                break;
            }
        }
        if (!duplicate){
            result.push(array[i])
        }
    }
    return result;
};

let myArray = [1, 2, 3, 4, 5];
let newArray = removeFromArray(myArray, 3, 4, 5, 6, 1)
console.log(newArray);
// Do not edit below this line
module.exports = removeFromArray;
