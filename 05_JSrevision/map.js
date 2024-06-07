const arr = [5, 4, 3, 2, 1];

//convert it into a binary representation
function binary(x) {
  return x.toString(2);
}
// mapping an array(logic)
const output = arr.map(binary);
console.log(` Binary output = ${output}`);

// double the numbers
function double(x) {
  return x * 2;
}
const doubleOutput = arr.map(double);
console.log(` Double output = ${doubleOutput}`);

// Triple
function triple(x) {
  return x * 3;
}
const tripleOutput = arr.map(triple);
console.log(` Triple output = ${tripleOutput}`);

//square
const square = arr.map( (x) => x*x);
console.log(` Square output = ${square}`);  


const user = [
    { firstName : "poi", lastName : "lkj", age : 24},
    { firstName : "qwe", lastName : "rty", age : 35},
    { firstName : "asd", lastName : "fgh", age : 84},
    { firstName : "zxc", lastName : "vbn", age : 11},
]

const fullName = user.map( (x) => {
  return x.firstName+ " "+ x.lastName+ " ";
})

console.log(`full name = ${fullName}`)