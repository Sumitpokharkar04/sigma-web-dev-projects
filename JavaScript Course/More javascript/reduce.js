const arr = [1,2,3,4,5,6,7,8];
//reduce is used to add elements and many other things

const total = arr.reduce(function learnreduce(accumulator,currentvalue) {

  return accumulator+currentvalue;
    
},0)

console.log(total);

/*
const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
*/

const sum = arr.reduce((acc,curr)=>acc+curr,6)
console.log(sum);
