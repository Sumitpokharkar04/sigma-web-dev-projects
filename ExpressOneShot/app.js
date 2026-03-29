/*here we will learn to send html files in response:
In node js we used to read a file and then send it to the server in ExpressJS we have built in
function to send html or anyother file i.e, resp.sendFile(absolutepath of file)
Now how to find absolute path of file in commonjs we can use __dirname to find it
but in ecma script we cant use __dirname which is a global object so instead we use path.resolve
to use it first we import path from path module lets start
*/

import express from 'express'
import path from 'path'
const app = express()
const absPath = path.resolve("pages")
const publicPath = path.resolve("public")
console.log(publicPath);

app.use(express.static(publicPath))
app.get("/",(req,resp)=>{
    
    resp.sendFile(absPath+"/home.html")
})

app.get("/login",(req,resp)=>{
    resp.sendFile(absPath+"/login.html")
})

app.get("/about",(req,resp)=>{
    resp.sendFile(absPath+"/about.html")
})

app.post("/submit",(req,resp)=>{
    resp.send("form submitted")
})

//Now what if user searches for a page that do not exist so lets create a 404 page

app.use((req,resp)=>{
       resp.status(404).sendFile(absPath+"/404.html")

})

app.listen(3200)