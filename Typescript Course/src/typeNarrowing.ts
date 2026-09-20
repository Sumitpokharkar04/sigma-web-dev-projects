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