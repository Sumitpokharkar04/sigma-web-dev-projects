let a = prompt("Enter a number");
let b = prompt("Enter another number");

if(isNaN(a) || isNaN(b)){
    throw new Error("Invalid input: Please enter numeric values only");
   // throw SyntaxError("Invalid input: Please enter numeric values only");

}
try {
    let sum = parseInt(a) + parseInt(b);
    console.log("sum is",sum*x);
} catch (error) {//here error is known as error object it contains information about the error that occurred.
    console.error("Error occurred while calculating sum:", error.message);
}

finally {
    console.log("Execution completed.");
}

function main() {
    try {
        return "try block";
    } catch (error) {
        return "catch block";
    } finally {
        return "finally block";
    }
}
main(); //it will return "finally block"
//The try block contains code that may throw an error.
//If an error occurs, the control is transferred to the catch block.
//The catch block handles the error and prevents the program from crashing.
//now finally block will execute whether there is an error or not.
//it is used to clean up resources or perform any final actions.
//it is primarily used in function that return a value in try and catch but we want to execute some code regardless of whether an error occurred or not.

//try and catch are used because if try block fails the catch block will handle the error and program will not crash.
//catch block consists of error object which contains information about the error that occurred.