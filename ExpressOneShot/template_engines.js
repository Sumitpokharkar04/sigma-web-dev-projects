import express, { response, urlencoded } from 'express'

const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.get("/",(req,resp)=>{
    resp.render('home')
})

app.post("/submit",(req,resp)=>{
    console.log(req.body);
    
    resp.render('submit-password',req.body)
})

app.get("/home1",(req,resp)=>{
    resp.render('home1',{name:'sumit',age:'23'})
})

app.get("/loops",(req,resp)=>{
    const data = ["sumit","kunal","rahul","aditya"]
    resp.render('testLoops',{data})
})

app.listen(3200)