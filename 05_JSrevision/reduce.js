arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//to find the sum of elements inside the array
const sum = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

console.log(`sum of all the elements inside the array : ${sum}`);

//to find the max number
const maxNum = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(`largest number in the array is : ${maxNum}`);
