import path from "path"

// console.log(path);

let mypath = "d:\\Sigma Web Html Css\\LearnBackend\\aboutpath.js\\harry.txt"
console.log(path.extname(mypath));
console.log(path.dirname(mypath));
console.log(path.basename(mypath));

console.log(path.join("c:/", "programs\\harry.txt"));