import mongoose from "mongoose";
import StudentModel from "../model/studentModel.js";
import StudentSchema from "../schema/studentsSchema.js";

//Now create a api for fetching data from database
//for that first import express
import express from 'express'
const app = express()

 await mongoose.connect("mongodb://localhost:27017/college").then(()=>{
    console.log("______connected______");
    
 })

//Reads incoming request body (JSON) and converts it into req.body
//without express.json() post method wont be used to read incoming json data 
app.use(express.json())

app.get("/",async(req,resp)=>{
    /*Now before we fetch data we have to make connectivity but instead of making connectivity
    inside a api its better to do it outside it so we dont have to make it again and again
    for each function though if we made connectivity for upper function it remains for the functions
    below it but its not true for apis that above the api that has a connection*/

    const studentData = await StudentModel.find()
    resp.send(studentData)  
})

app.post("/xyz",async (req,resp)=>{
    console.log(req.body)//req.body server checks request

    //this things happen inside server
    //apply check before storing data
    const {name,age,email}=req.body
    if(!name || !age || !email)
    {
         resp.send({
        message:"data not stored",
        success:false,
        info:null
        
    })
    }
    else{
     const studentData = await StudentModel.create(req.body)
    //server sends response
    resp.send({
        message:"data stored",
        success:true,
        info:studentData
    })
    }

})

app.put("/update/:id",async(req,resp)=>{

    const id = req.params.id
    
    const studentUpdate = await StudentModel.findByIdAndUpdate(id,{...req.body})
    resp.send({
        message:"data update",
        status:200
    })
})


app.delete("/delete/:id",async(req,resp)=>{

    const id = req.params.id
     const student = await StudentModel.findById(id);
    const studentUpdate = await StudentModel.findByIdAndDelete(id)
    resp.send({
        message:"data Deleted ",
        status:200,
        info:student

    })
})
app.listen(3200)

