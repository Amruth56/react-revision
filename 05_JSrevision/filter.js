const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter all the odd values from arr
const oddOutput = arr.filter((x) => x % 2);
console.log(`odd values are ${oddOutput}`);

// to find even numbers
const evenNumber = arr.filter((x) => x % 2 === 0);
console.log(`even numbers are ${evenNumber}`);

// number greater than 5

const GreaterThanFive = arr.filter( (x) => x>5);
console.log(`number greater than 5 are ${GreaterThanFive}`);


const user = [
    { firstName : "poi", lastName : "lkj", age : 24},
    { firstName : "qwe", lastName : "rty", age : 35},
    { firstName : "asd", lastName : "fgh", age : 84},
    { firstName : "zxc", lastName : "vbn", age : 11},
    { firstName : "thb", lastName : "uhn", age : 11},
    { firstName : "sfv", lastName : "zxc", age : 35},
]

const ageOutput = user.filter( (x) => x.age < 30).map((x)=> x.firstName)
console.log(ageOutput)