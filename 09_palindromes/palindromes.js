const palindromes = function (string) {
    let refinedString = string.toLowerCase().replace(/[^a-z]/gi, "");
    return refinedString === refinedString.split("").reverse().join("");
    
};

// Do not edit below this line
module.exports = palindromes;
