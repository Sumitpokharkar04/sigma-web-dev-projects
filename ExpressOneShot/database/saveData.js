import { dir } from 'console'
import express, { urlencoded } from 'express'
import { MongoClient } from 'mongodb'
import {fileURLToPath} from 'url'
import path from 'path'
const app = express()
const __filename = fileURLToPath(import.meta.url)
console.log(__filename);

const __dirname = path.dirname(__filename)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,"../views"))
app.use(express.urlencoded({extended:true}))



//create constants
const dbName = "college"
const url = "mongodb://localhost:27017/"
const client = new MongoClient(url)

//connect to server
app.get("/send-data",(req,resp)=>{
 resp.render('senddataToDb')
})

app.post("/save-data",async (req,resp)=>{
      await client.connect()
      const db = client.db(dbName)
      const collection =  db.collection('students')
      const result = await collection.insertOne(req.body)
      console.log(result);
      resp.send("data saved")
      
      
})


app.listen(3200)