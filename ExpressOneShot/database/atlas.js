import { MongoClient } from "mongodb";
const url = "mongodb+srv://pokharkarsumit04:Sumit112@cluster0.xpxubxz.mongodb.net/?appName=Cluster0"
const dbName = "college"
const client = new MongoClient(url)

client.connect().then((v)=>{
console.log("____connected____");
})

async function dbConnection()
{
    // //connect the client with node
    // await client.connect()

    const db = client.db(dbName)

    const collection = db.collection('student')

    const result = await collection.find().toArray()
    console.log(result);
    
}
dbConnection()