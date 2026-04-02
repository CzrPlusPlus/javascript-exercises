const palindromes = function (string) {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
  
  const modifiedString = string
    .toLowerCase()
    .split("")
    .filter(character => validCharacters.includes(character))
    .join("");

  const reverse = modifiedString.split("").reverse().join("");
  return reverse === modifiedString;
};

// Do not edit below this line
module.exports = palindromes;
