// Here we will create schema for mongoose and export it to build a model
import mongoose from "mongoose";
const StudentSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String
})

export default StudentSchema