//Lets learn call backs in JavaScript

// function changeh1text(){
//     document.getElementById("myh1").innerText="Hello world changed by callback";    

// }
// changeh1text();

// lets write a function to print hello

function printHello(callback,anothercallback) {
    //Here these two parameters represent the functions that will be passed as arguments when calling printHello function
    setTimeout(() => {
        console.log("Hello")
        callback();
        anothercallback();
    }, 3000);;
     // we are calling the callback function here after printing hello
}

// lets write a function to print world 

function printworld()
{
    console.log("world");
}

// we are passing printworld as a parameter to print hello function
//this line wont print world immediatly because we are not calling printworld function here we are just passing it as a parameter


// control flow in settimeout is like this arrow functions assigns a task 
// to wait for 3 seconds and then execute all the lines as sequentially
// after that it will execute the callback function passed to it

function printbeutiful(){
    console.log("is beutiful");
}

printHello(printworld,printbeutiful); // after 3 seconds it will print hello world is beutiful

// now lets take another example


