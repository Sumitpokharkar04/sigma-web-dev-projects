import fs from "fs"

let a = await fs.readFile("harry.txt",(error,data)=>{
    console.log(data.toString());
});

// let b = await fs.writeFile("harry.txt.","i have written something");
let c = await fs.appendFile("harry.txt","\nkaise ho bhai",(error)=>{
  console.log(c);
});


