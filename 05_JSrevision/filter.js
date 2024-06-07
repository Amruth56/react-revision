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
