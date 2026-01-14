async function sleep()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("hey hello there");
        },2000)
    })
}

async function next()
{
     return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("lets do it");
        },1000)
    })
}

/*this is known as iife(immediatly invoked function) syntax--> (function name(){code...})()  */ 
(async function main()
{
let a = await sleep();
console.log(a);
let b = await next();
console.log(b);
})()

let obj = {
     a :6,
     b:3,
     c:4,
     d:5
    
} 
function sum(a,b,c)
{
    return a+b+c; 
}
let {a,b}=obj;
console.log(a,b);

let arr = [1,2,3,4,5];
//there are various ways to print sum of array
console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]);
// console.log(sum(arr[0],arr[1],arr[2],arr[3],arr[4]));
console.log(sum(...arr));

