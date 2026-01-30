const express = require('express')
const app = express()
// const port = 3000;

//app.get/app.post/app.use(path,handler)
app.get('/',(req,res)=>{
    res.send("hello world")
})

//now this is my blog page
app.get('/blog',(req,res)=>{
    res.send("hello blog!")
})
//now lets do one thing now if we want to see individual blogs 
//we have to write a mapping for every single one of them lets see

app.get('/blog/blog1',(req,res)=>{
    res.send("This is first blog")
})

app.get('/blog/blog2',(req,res)=>{
    res.send("this is second blog")
})

/*
now if there are 1000 blogs we have to give a separate mapping and separate 
code for evry blog which is extremely inefficient thats why we use parameters and queries
means we can use variable for every blog or elements lets see
*/

app.get('/blog/:slug',(req,res)=>{
    //logic to fetch slug from db
    console.log(req);
    res.send(`This is ${req.params.slug}`)
})

/*
here we can give multiple variables like slug and req.params is a object
which contains all variables also called variable parameters
and query paramers are given with help of question mark(?)
like localhost:/3000?blog/sumit?mode=dark/ */

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })