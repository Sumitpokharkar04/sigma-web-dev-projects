import {a,b} from "./myModules.js"

console.log(a,b);

import {obj} from "./myModules.js"

console.log(obj);

/*this both are examples of named export */

import obj1 from "./myModules.js"
console.log(obj1);//here we didnt have to use {} to select it
//we can use any name or string to represent the default value for example

import sumit from "./myModules.js"
console.log(sumit);//and as we can see our default object gets printed

//now this we did with the ecma script syntac if we had to do the same thing with
//common js lets see what is the syntax of it

// const a = require("./myModules.js");
// console.log(a);



// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });