// Here we will learn to connect MongoDB database to nodeJS

import express from'express'

import { fileURLToPath } from 'url'

import path from 'path'

const app = express()


    const __filename = fileURLToPath(import.meta.url)
    console.log(__filename);

    const __dirname = path.dirname(__filename)
    console.log(__dirname);

    // const absPath = path.join(__dirname,"../views/")
    // console.log(absPath);

app.set("view engine",'ejs')
app.set("views",path.join(__dirname,'../views'))//this tells the location of ejs files


//step1 - import mongo client

import { MongoClient } from 'mongodb'

//step2 - create three constant variables databasename,mongodb url and mongodb client

const dbName = "college"

const url = "mongodb://localhost:27017/"

//The MongoClient class is a class that allows for making Connections to MongoDB.
const client = new MongoClient(url)
//this connects database to database server which handles operations 
// and consists backend logic behind working of database.

//step3 - create a connection between node and mongo with the help of client instance we created

//create a async function
async function dbConnection()
{
    //connect the client with node
    await client.connect()

    const db = client.db(dbName)

    const collection = db.collection('students')

    const result = await collection.find().toArray()
    console.log(result);
    
}
dbConnection()

app.get("/data",async (req,resp)=>{


    const db = client.db(dbName)
    const collection = db.collection('students')
    const students = await collection.find().toArray()
    resp.render('showData',{students})
})



app.listen(3200)




