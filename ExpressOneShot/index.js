import express from 'express'
import home from './pages/home.js'
import login from './pages/login.js'

const app = express()

app.get("/",(req,resp)=>{
    resp.send(home())
})

app.get("/login",(req,resp)=>{
    resp.send(login())
})
//post request is a request where we send data to another route like sending username
//and password from login page to submitpage

//GET request is a request where we do not send any data we just request to show us
//data from certain route like when we click on login here we are just asking it to
//give us data from /login route that is a login page so it will be get request not
//post request.The previous idea that clicking on link means post request is a wrong
//idea so we can click to ask or send a GET request.so this is correct=>app.get("/login",(req,resp)


app.get("/login",(req,resp)=>{
    resp.send(login())
})


app.post("/submit",(req,resp)=>{
    resp.send("data submitted login successful")
})


app.listen(3200)