let response: any = '23'

let numericlength : number = (response as string).length //this is called type assertion.

type book ={
    name : string;
}

let boookstring = "{name:'sumit'}"

let bookobject : Object = JSON.parse(boookstring) as book;

console.log(bookobject)

let value:any ='jay hind'

value = 2
value = [1,2,3]
console.log(value);

let newvalue : unknown = 'unkown'

newvalue = 3
newvalue = [1,2,3]
value.toUpperCase();
console.log(newvalue);
//newvalue.toLowerCase(); => this will thorw error because we are using unnkown so we need to give typeguard.
if(typeof newvalue ==="string")
{
    newvalue.toLowerCase();
}

try {
    
} catch (error) {
   // console.log(error.message); => this will throw error
    if(error instanceof Error)
    {
        console.log(error.message);
        
    }
    else{
        console.log('error is',error);
        
    }
}

const data : unknown = 'jay hind';

const strdata : string = data as string // if we just did = data it will throw error because we need to declare type before assigning or operating over a unknown type.
