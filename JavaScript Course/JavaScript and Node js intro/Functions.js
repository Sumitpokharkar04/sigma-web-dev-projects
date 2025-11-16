function name(name) 
{
  console.log("Hello, " + name + "!");    
}

name("Alice");

function add(a,b)
{
    return a+b;
}

result = add(5,10);
console.log("Sum is: " + result);

//Arrow function is another way to write functions in JavaScript it is more concise

const multiply = (x, y) => {
    return x * y;
}

multiply(4, 5); // returns 20
console.log("Product is: " + multiply(4, 5));