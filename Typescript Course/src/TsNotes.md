📘 TypeScript Notes
1. Keywords in TypeScript
🔹 Type System Keywords

1)  is → Used in type guards.
    Tells the compiler: if this function returns true, then the parameter is of a certain type.

    ts
    function isStringArray(arr: unknown): arr is string[] {
        return Array.isArray(arr) && arr.every(x => typeof x === "string");
    }

2)  as → Type assertion.
    You tell the compiler to treat a value as a specific type.

    ts
    let value: unknown = "hello";
    let strLength = (value as string).length;
    typeof → Runtime type check.
    Returns a string describing the type of a value.

    ts
    typeof "abc"; // "string"

3)  instanceof → Check if an object is created from a specific class.

    ts
    if (obj instanceof Date) { ... }
    keyof → Get the keys of a type.

ts
type Person = { name: string; age: number };
type Keys = keyof Person; // "name" | "age"

4)  in → Check if a property exists in an object.

ts
if ("name" in person) { ... }


5)  extends → Used in class inheritance and generics.

ts
class Dog extends Animal { }

6)  implements → Enforce that a class follows an interface.

ts
interface Flyable { fly(): void }
class Bird implements Flyable { fly() { ... } }

7)  readonly → Makes a property immutable.

ts
readonly id: number;


#   Special types:

1) unknown → safer version of any (must check before using).

2) any → disables type checking.

3) never → represents values that never occur (e.g., a function that always throws).

4) void → function returns nothing.

2. Control Flow Keywords
if, else, switch, case, break, continue → standard conditional logic.

for, while, do → loops.

return, throw, try, catch, finally → function exits and error handling.

3. Declarations
let → block-scoped variable.

const → block-scoped constant.

var → function-scoped (avoid using).

function, class, interface, enum, type → ways to define structures.

public, private, protected → access modifiers for class members.

4. Built‑in Functions / Methods
🔹 Type Checks
Array.isArray(value) → true if value is an array.

typeof value → returns "string", "number", etc.

instanceof → check if object is instance of a class.

🔹 Array Methods
.map() → transform each element.

.filter() → keep elements that match condition.

.reduce() → combine into one value.

.forEach() → run a function for each element.

.every() → true if all elements match condition.

.some() → true if at least one matches.

.find() → first matching element.

.includes() → check if element exists.

🔹 String Methods
.toUpperCase(), .toLowerCase() → change case.

.trim() → remove spaces.

.split() → break into array.

.includes() → check substring.

.replace() → replace part of string.

🔹 Object Utilities
Object.keys(obj) → property names.

Object.values(obj) → property values.

Object.entries(obj) → key/value pairs.

🔹 Math Utilities
Math.max(), Math.min() → largest/smallest.

Math.floor(), Math.ceil(), Math.round() → rounding.

Math.random() → random number between 0 and 1.

✅ Summary:

Keywords = grammar of TypeScript (control flow, type system, declarations).

Built‑in functions = toolbox for working with arrays, strings, objects, and numbers.

is is special: it’s not a return type, but a type guard that helps the compiler narrow types.


1. any (The Escape Hatch)The any type completely disables TypeScript's safety features. It allows a variable to hold literally any data type, and lets you access any property or method on it without checking if it exists. Using any can lead to runtime crashes.

    typescript

    let dynamicValue: any = "Hello";
    dynamicValue = 42; // Allowed
    dynamicValue.toUpperCase(); // Compiles perfectly, but crashes at runtime because 42 is a number!
    Use code with caution.

2. unknown (The Safe Alternative to any)Like any, you can assign any value to an unknown variable. However, TypeScript will not let you interact with it until you explicitly check or prove what type it actually is (type narrowing).

    typescript

    let secureValue: unknown = "Hello";

    // secureValue.toUpperCase(); // ❌ Compiler Error: Object is of type 'unknown'.

    if (typeof secureValue === "string") {
        secureValue.toUpperCase(); //  Allowed! TypeScript now knows it's a string.
    }
    Use code with caution.

3. void (Function Returns Nothing)void is used almost exclusively as a function return type. It means the function executes its logic (like logging to a console or saving to a database) but doesn't pass back a usable value.

    function logMessage(message: string): void {
        console.log(message);
        // No return statement here
    }
    Use code with caution.


4. undefined (The Primitive Value)undefined is an actual value in JavaScript/TypeScript. In TypeScript, it is usually used to mark object properties that are optional or variables that might not have a value yet.

    let user: { name: string; age?: number }; // age can be a number or undefined

    let trackingId: undefined = undefined; // Can only hold the value 'undefined'
    Use code with caution.