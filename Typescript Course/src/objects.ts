const Tea = {
    name:'masala chai',
    price:20,
    isHot:true
}

//this is infered in the background typescript infers this or type of this object as

// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }

// declaring object types

let tea : {
    name:string;
    price:number;
    isHot:boolean;
}

tea = {
    name:"masala chai",
    price:25,
    isHot:true
}

type Adrak = {
    name:string;
    price:number;
    ingreditnts:string[]
}

//Duck typing => it just means that if ts sometimes or most of the times extra values if the basic
//type requirement is getting satisfied. so lets see an example

type brew = {beanNumber:number}

const coffee ={
    beanNumber:100
}

//now this can give error cosnt coffee:brew = {
// beanNumber : 100,
// beanType:"arabica"
// }

//but it wont give error in this situation because here ts sees that someone is assigning some value
//to another variable so the data can also have other values so it only checks the incoming
//data has required fields like beanNumber.

//this is not a good thing and can be used as a security vulnerability we can use zod to make things
//more secure/
const coffee1 : brew = coffee

//reusability of types 

type items = Array<string>
type address = string

type order = {
    id:string;
    Items : items;
    Address: address
}

//Now lets learn if we have implemented a type on a function how can we partially use

type person  = {
    name:string;
    age:number;
    gender:"male"|"female"
}

const updatePerson = (update:Partial<person>)=>{
    console.log("updating", update)
}

updatePerson({gender:"male"})

//so here instead of strict where we have to give all sometimes we will need to partially update things
//there Partial can be really helpful what is does is it makes all the values of that type optional for 
//a specific function or variable.

//but there is a problem as all properties becomes optional risk of assigning empty values is there.

//lets learn about other key words like required , pick and omit

type keywords = {
    name:string;
    age:number;
    gender?: "male" | "female"
}

//Now lets see required keyword => it makes even optional charachters compulsory

const Req = (req:Required<keywords>)=>{
    console.log(req)
}

Req({name:"required",age:22,gender:"female"})

//lets learn about pick it lets us pick properties from a type

const pick = (pik:Pick<keywords,"age">)=>{
    console.log(pik)
}

pick({age:20})

//lets learn about omit

const omit = (omit:Omit<keywords,"age">)=>{
    console.log(omit)
}

omit({name:"sumit",gender:"male"})