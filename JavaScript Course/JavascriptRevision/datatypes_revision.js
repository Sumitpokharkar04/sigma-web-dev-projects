/* Based on how data is stored into memory and how they are retrieved they are divided into two parts primitive and
non primitive 

Primitive data types => call by value (we dont get memory value we  just get the value)

There are 7 types of primitive data types
1)String
2)Number
3)Null
4)Undefined
5)Boolean
6)Symbol
7)BigInt

Non-Primitive data types => call by reference

Arrays,Objects,Functions

*/

/*Note : 
JavaScript is a dynamically typed language.This means that variable types are checked during runtime, not at compile time, and a single variable can hold values of different types throughout the execution of a program.*/

let a = 10;
console.log(a);

a = 3
console.log(a);

const id = Symbol('112')
console.log(id);

const another_id = Symbol(112)
console.log(another_id);
console.log(id===another_id);
