const fibonacci = function(num) {
    if (num < 0)    {
        return "OOPS";
    }
    let resultArray = [1,1];
    for (let i = 0; i < num; i++)   {
        resultArray.push(resultArray[i] + resultArray[i+1]);
    }
    return resultArray[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
