const arr = [1,2,3,4,5,6,7,8]
//we can use map to modify an array
//let see
const myNums = arr.map((num)=>num+1);
console.log(myNums);
/* we can also write it like this arr.map((num)=>{
return num61});  */


//Now letts learn chaining 
const letsChain = 
arr
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>40)

console.log(letsChain);
/*output --> [
  11, 21, 31, 41,
  51, 61, 71, 81
]  here we can see both the map get implemented and output of first one was 
  passed as an input we can also use filter with it  */
