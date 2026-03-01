import fs from "fs"

// console.log(fs)
// fs.writeFileSync("harry.txt","hey hello harry");//this is synchronous approach


//This is asynchronous first starting-->ended-->done this is the order in which we can see execution happening.
console.log("starting")
fs.writeFile("harry2.txt","this is second file",()=>{
    console.log("done")
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(data.toString());
    })
})

console.log("operation ended")