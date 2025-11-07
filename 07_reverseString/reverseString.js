const reverseString = function(string) {
    let result = ""
    for (let i = string.length-1; i >= 0; i--){
        result += string[i];
    }
    return result;
};

let myString = "hello";
let reversedString = reverseString(myString);
console.log(reversedString);

// Do not edit below this line
module.exports = reverseString;
