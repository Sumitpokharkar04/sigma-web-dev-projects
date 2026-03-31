import express from 'express'

const app = express()

app.set('view engine','ejs')

app.get("/",(req,resp)=>{
    resp.render('home',{name:'anil',age:'20'})
})

app.listen(3200)