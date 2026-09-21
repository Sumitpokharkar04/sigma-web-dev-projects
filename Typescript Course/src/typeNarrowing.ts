function getChai(kind:string|number)
{
    if(typeof kind =="string")
    {
        return `serving ${kind} as a string`
    }
    else{
        return `serving ${kind} as a number`
    }
}

function servechai(msg?:string)
{
    if(msg)
    {
        return ` message arrived ${msg}`
    }
    return `message did not arrived`
}

//this all are best practices in typescript.

class KulhadChai
{
    serve()
    {
        return `serving kulhad chai`
    }
}

class tadkaChai
{
    serve()
    {
        return `serving tadkaChai`
    }
}

function serve(chai:KulhadChai|tadkaChai)
{
    if(chai instanceof KulhadChai)
    {
        return chai.serve();
    }
}

//Now lets make our custom types 

type chaiOrder ={
    type:string
    sugar : number
}

function isOrderChai(obj:any):obj is chaiOrder
{
    return (typeof obj ==='object'&&
        obj!==null &&
        typeof obj.type==='string' &&
        typeof obj.sugar ==='number'
    )
}

function serveOrder(item:chaiOrder|string)
{
    if(isOrderChai(item))
    {
        return `serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `serving custom chai : ${item}`
}

type MasalaChai = {type:'masala' ; spiceLevel:number}
type GingerChai = {type:'ginger'; amount:number}
type ElaichiChai = {type:'elaichi'; aroma:number}

type chai = MasalaChai|GingerChai|ElaichiChai

function makeChai(order:chai)
{
    switch (order.type)
    {
        case "masala":
            return 'Masala chai'
            break;
        case "elaichi":
            return 'elaichi chai'
            break;
        case "ginger":
            return 'ginger chai'
            break;
    }
}

function brew(order:MasalaChai | GingerChai)
{
    if("spicelevel" in order)
    {
        return 'this is masala chai'
    }
}

function isstringarray(arr:unknown):arr is string[]
{
    
    const array = ['a','s']
    return true
}

function isString(arr:unknown):string{
    return 'hello'
}

//example 
function isStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}

const value: unknown = ["a", "b"];

if (isStringArray(value)) {
    // ✅ Here TypeScript narrows value to string[]
    console.log(value.join(", "));
}
