const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    let oldestAge = 0;
    let oldestOne;
    for (let i = 0; i < arr.length; i++)    {
        let age = (arr[i].yearOfDeath || currentYear) - arr[i].yearOfBirth;
        if (age > oldestAge)    {
            oldestAge = age;
            oldestOne = arr[i];
        }
    }
    return oldestOne;
};

// Do not edit below this line
module.exports = findTheOldest;
