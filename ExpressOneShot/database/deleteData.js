import { dir } from 'console'
import express, { urlencoded } from 'express'
import { MongoClient, ObjectId } from 'mongodb'
import {fileURLToPath} from 'url'
import path from 'path'
const app = express()
const __filename = fileURLToPath(import.meta.url)
console.log(__filename);

const __dirname = path.dirname(__filename)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,"../views"))
app.use(express.urlencoded({extended:true}))

//All CRUD Operations

//create constants
const dbName = "college"
const url = "mongodb://localhost:27017/"
const client = new MongoClient(url)
const db = client.db(dbName)

//connect to server
// app.get("/",(req,resp)=>{
//     resp.render('showData')
// })

app.get("/send-data",(req,resp)=>{
    resp.render('senddataToDb')
})

app.get("/",async (req,resp)=>{
    const collection = db.collection('students')
    const students = await collection.find().toArray()
    resp.render('showData',{students})
})

app.post("/save-data",async (req,resp)=>{
      const collection =  db.collection('students')
      const result = await collection.insertOne(req.body)
      console.log(result);
      resp.send("data saved")
         
})

app.get("/delete/:id",async (req,resp)=>{
    console.log(req.params.id);
    const collection = db.collection('students')
    const result = await collection.deleteOne({_id:new ObjectId(req.params.id)})
    resp.send({
        message:"user deleted",
        status:"success"
    })
})

app.get("/update/:id",async (req,resp)=>{
    console.log(req.params.id);
    const collection = db.collection('students')
    const result = await collection.findOne({_id:new ObjectId(req.params.id)})
    resp.render('update-student',{result})
   
})//This request gives us the form for updating individual data 

app.post("/update-data/:id", async (req, resp) => {
    const collection = db.collection('students')
//Final Rule to Remember
//:id → only used in route definition
//Actual URL → only real value, no :
    console.log(req.params.id)
    const result = await collection.updateOne(
        { _id: new ObjectId(req.params.id) }, // find document
        { $set: req.body } // update fields
    )

    console.log(result)

    resp.send("data updated")
})


app.listen(3200)