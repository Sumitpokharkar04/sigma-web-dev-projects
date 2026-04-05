// Here wil will create a model to connect schema to collection
import mongoose from "mongoose";
import StudentSchema from "../schema/studentsSchema.js";

const StudentModel = mongoose.model('students',StudentSchema)

export default StudentModel