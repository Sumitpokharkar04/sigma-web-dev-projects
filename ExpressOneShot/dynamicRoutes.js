import express from 'express'
const app = express()

//Here we will learn to make dynamic routes because if there are suppose 100 names we cant make
//1000 routes for each one of them so lets see how to make them
app.get("/",(req,resp)=>{
    const users = ["sumit","sahil","kunal","vedant"]
    let data = ``
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
        data+=`<li><a href="/users/${users[i ]}">${users[i ]}</a></li>`
    }

    resp.send(data)
})

app.get("/users/:name",(req,resp)=>{
    let name = req.params.name
    resp.send(`This is ${name}'s page`)
})

app.listen(3200)