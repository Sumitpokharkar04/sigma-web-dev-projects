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

app.use(checkAge)
app.get("/",(req,resp)=>{
    resp.send("Home Page")
})

app.get("/about",(req,resp)=>{
    resp.send("about Page")
})

app.listen(port)


