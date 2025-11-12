console.log("new script is running...");
//---> JAVASCRIPT BASICS LECTURE 2 <---//
//variables
//there are 3 types of variables in js 
//1. var - value can be changed and redeclared depending on the scope 
//2. let - value can be changed but cannot be redeclared they are block scoped
//3. const - value cannot be changed

let name = "John";
let y = 25;
let c = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log("name is "+name);
console.log("age is "+y);
console.log("price is "+c);
console.log("is available "+p);
console.log("value of q is "+q);
console.log("value of r is "+r);

console.log(typeof name, typeof c, typeof y, typeof p, typeof q, typeof r);
//typeof null gives object this is a bug in js
//you can change the value of let and var but not const

let o = {

    firstName: "John",
    lastName: "Doe",
    age: 30,
    isMarried: false
}

console.log(o);
o.age = 31; //changing value of age
console.log("updated age is "+o.age);
//you can also add new properties to the object
