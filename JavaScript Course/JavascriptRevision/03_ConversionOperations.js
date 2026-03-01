//lets see data type conversions

let score = "33"
console.log(typeof(score));

// Now lets convert this score string to a number

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

let value = false
let temp = Number(value)
console.log(typeof(temp));
console.log(temp);



// now lets see some type conversion errors
/* In some cases the inputs type gets converted into numbers but the output it shows after printing value is entirely different
lets see what we will get
 For Strings like "hitesh" or "33abc it gives (NaN) if we checked"
null => 0 
undefined => NaN
true => 1 and false => 0

 */

let holder = " "
let test = Boolean(holder)
console.log(test);

/* 
so for boolean data type
1 => true
0 => false
Anything written inside a String give (true)
Empty String ("") => false but if the empty string has space ("  ") then it is (true)
null => false
undefined => false
 */

let normalValue = ""

let stringValue = String(normalValue);
console.log(typeof stringValue);
