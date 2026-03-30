//Here we learn to apply multiple middlewares on a request and also to give middlewares on
//specific routes

import express from 'express'
const app = express()
const port = 3200
//http://localhost:3200/about?age=20
function checkAge(req,resp,next)
{
    if(req.query.age>18)
    {
        next()
    }
    else{
        resp.send("Alert ! you are under age")
    }
}

function checkURL(req,resp,next)
{
    console.log(req.url)
    next()
}






app.get("/",(req,resp)=>{
    resp.send("Home Page")
})

app.get("/about",checkAge,checkURL,(req,resp)=>{
    resp.send("about Page")
})

app.listen(port)

