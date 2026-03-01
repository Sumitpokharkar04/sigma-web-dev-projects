const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('This is get request')
})

app.post('/', (req, res) => {
  res.send('This is post request')
})//post sends response or data to server

//lets return file
app.get("/index",(req,res)=>{
    res.sendFile('templates/index.html',{root:__dirname})
})

//lets return json data

app.get("/api",(req,res)=>{
    res.json({a:1,b:2,c:3})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
