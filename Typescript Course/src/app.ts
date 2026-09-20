class doMaths 
{
    greet(name:string):string{
    return `hello ${name}`
}

    givegreeting(greeting:string):string{
        return(greeting)
    }

}

const obj = new doMaths();

console.log(obj.greet("yash"));
console.log(obj.givegreeting("good morining!"));

