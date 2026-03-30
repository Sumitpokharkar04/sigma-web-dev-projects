//here we will learn to make and use middlewares
//now if want something to run before the request goes to main routes we can use middleware

import express from 'express'
const app = express()
const port = 3200;

function checkRoute(req,res,next)
{
    console.log(req.url);
    next()
    
}

app.use(checkRoute)

app.get("/",(req,resp)=>{
    resp.send("Home Page")
})


app.get("/users",(req,resp)=>{
    resp.send("users Page")
})

app.get("/contact",(req,resp)=>{
    resp.send("contact Page")
})



app.listen(port)