import express from 'express'
import userData from './data.json' with {type:'json'}
const app = express()


//Here we will make dynamic routes of data from database or json data
app.get("/",(req,resp)=>{
   console.log(userData);
   resp.send(userData);
})

app.get("/users/:name",(req,resp)=>{
 let name = req.params.name
 let filterData = userData.filter((user)=>user.name==name)
 resp.send(filterData)
 
})

app.listen(3200)