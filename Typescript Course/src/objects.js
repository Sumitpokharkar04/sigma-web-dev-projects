"use strict";
const Tea = {
    name: 'masala chai',
    price: 20,
    isHot: true
};
//this is infered in the background typescript infers this or type of this object as
// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }
// declaring object types
let tea;
tea = {
    name: "masala chai",
    price: 25,
    isHot: true
};
const coffee = {
    beanNumber: 100
};
//now this can give error cosnt coffee:brew = {
// beanNumber : 100,
// beanType:"arabica"
// }
//but it wont give error in this situation because here ts sees that someone is assigning some value
//to another variable so the data can also have other values so it only checks the incoming
//data has required fields like beanNumber.
//this is not a good thing and can be used as a security vulnerability we can use zod to make things
//more secure/
const coffee1 = coffee;
const updatePerson = (update) => {
    console.log("updating", update);
};
updatePerson({ gender: "male" });
//Now lets see required keyword => it makes even optional charachters compulsory
const Req = (req) => {
    console.log(req);
};
Req({ name: "required", age: 22, gender: "female" });
//lets learn about pick it lets us pick properties from a type
const pick = (pik) => {
    console.log(pik);
};
pick({ age: 20 });
//lets learn about omit
const omit = (omit) => {
    console.log(omit);
};
omit({ name: "sumit", gender: "male" });
