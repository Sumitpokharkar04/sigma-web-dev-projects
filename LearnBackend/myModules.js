export const a = 2;//this is named export because we are exporting variables using their names
export const b = 3;
export const c = 4;

export let obj = {
    x:5,
    y:6
}


let obj1;
export default obj1 = {//This is default export so we can import with any name   
    u:2,
    v:3
}

/*
export syntax for commonjs
let z = 3;
module.exports = z;*/