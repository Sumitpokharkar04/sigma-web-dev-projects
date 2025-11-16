// JAVASCRIPT BASICS LECTURE 3 <---//
//Conditional Statements

let age = 20;

if(age>18){
    console.log("You are eligible to vote");
}

//Javascript loops
// basic for loop
// for(let i=0;i<=100;i++){
//     console.log("Iteration number "+i);
// }

let a = 1;

for (let i = 0; i < 5; i++) {
   console.log(a+i);
}

//for in loop--> for in loop generally used for objects it iterates over keys of objects
let obj = {
    name: "Harry",
    role : " Programmer",
    company : "Code with Harry"
};

for (const key in obj) {
    const element = obj[key];
    console.log(key + " : " + element);
}

for (const element of "Harry") {
    console.log(element);
}

//while loop || for example print numbers from 1 to 10
let num = 1;
while(num<=10){
    console.log(num);
    num++;
}

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);