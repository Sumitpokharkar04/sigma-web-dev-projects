/*lets learn object oriented programming in javascript*/

let a = {
    name: "John",
    age: 25,
    isStudent: true,
}
console.log(a);
let b = {
    name: "Doe",
    age: 30,
    
}

b.__prototype__=a; // setting prototype
console.log(b);

let animal={
    eats: true,
    walks: true,
}

let rabbit={
    jumps: true,
    
};

rabbit.__proto__=animal;

console.log(rabbit)