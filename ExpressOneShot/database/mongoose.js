// Lets learn about mongoose package and its connectivity

import mongoose from "mongoose";

async function dbConnectivity()
{
   await mongoose.connect("mongodb://localhost:27017/college")

   //Now make a schema to define data and its type
   const schema = mongoose.Schema({
    name:String,
    age:Number,
    email:String
   })

   //Then create a model
   const studentModel = mongoose.model('students',schema)
   const result = await studentModel.find()
   console.log(result);
   
}
dbConnectivity()