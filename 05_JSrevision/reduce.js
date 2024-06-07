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


const user = [
    { firstName : "poi", lastName : "lkj", age : 24},
    { firstName : "qwe", lastName : "rty", age : 35},
    { firstName : "asd", lastName : "fgh", age : 84},
    { firstName : "zxc", lastName : "vbn", age : 11},
    { firstName : "thb", lastName : "uhn", age : 11},
    { firstName : "sfv", lastName : "zxc", age : 35},
]

// to print the number of times a particular age has occurred
const ageOutput = user.reduce( (acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else{
        acc[curr.age] =1;
    }
    return acc;
}, {});

console.log(ageOutput)



const  ageName = user.reduce ( (acc, curr) => {
    if(curr.age > 30)
        {
            acc.push(curr.firstName)
        }
        return acc;
}, [])

console.log(ageName)