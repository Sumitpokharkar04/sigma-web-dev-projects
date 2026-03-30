import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

app.use(express.urlencoded({extended:true}))


const __filename = fileURLToPath(import.meta.url)


const __dirname = path.dirname(__filename)


app.use(express.static(path.join(__dirname, '../public')));
app.get("/", (req, resp) => {
    const absPath = path.join(__dirname, '../pages/home.html')

    resp.sendFile(absPath)
})

app.get("/login",(req,resp)=>{
 const absPath = path.join(__dirname,"../pages/login.html")
 resp.sendFile(absPath)
})

app.post("/submit",(req,resp)=>{
 console.log(req.body);
 //in post request we cant simply get data in post request for that use built middleware "urlencode"
 resp.send("Data submitted")
})



app.listen(3200)