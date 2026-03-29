const path = require('path')
const file = "file.txt"

console.log(path.extname(file));
console.log(path.dirname(file));
console.log(path.basename(file));

console.log(path.resolve(".","file.txt"));
console.log(path.isAbsolute(file));


//__dirname and  __filename are known as global constants they do show directory name
//and file name of file but they are not part of the path module.
console.log(__dirname);
console.log(__filename);





