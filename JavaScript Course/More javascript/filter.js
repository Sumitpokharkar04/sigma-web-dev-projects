const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

arr.forEach((num) => {
    // console.log(num);
});

//for each loop does not return anything

/*now to return values we can use filter method
now lets make a fresh array to see how we can use filter instead of for each and
return values */

const arr1 = [1,2,3,4,5,6,7,8];

const nums = arr.filter((num)=>num>4);
console.log(nums);

/* or we can use like this
const nums = arr.filter((num)=>{
    return num>4}); */
    
const arr2 = [1,2,3,4,5,6,7,8];

const numm = arr2.filter((num)=>num+1);
console.log(numm);
//output --> 1,2,3,4,5,6,7,8

// filter() only decides whether to keep an element (expects true/false), it does not modify values.
// num + 1 is always truthy, so nothing is removed—use map() to add 1 to each element.



