import express from 'express'
import multer from 'multer'

const app = express()

//This storage code give us proper file extension and its data so we can view and access it
const storage = multer.diskStorage({

    destination:function(req,file,cb)//functions with no name are called anonymous functions
    {
        cb(null,'upload')
    },
    filename:function (req,file,cb)
    {
        cb(null,file.originalname)
    }

})

const upload = multer({storage})
// const upload = multer({dest:'upload'}) This was initial it uploads file but does not fetch extension and data properly

app.use(express.urlencoded({extended:true}))
app.get("/",(req,resp)=>{

    resp.send(`  <h2>Upload a File</h2>

  <form action="/upload" method="POST" enctype="multipart/form-data">
    
    <label for="file">Choose file:</label>
    <input type="file" name="myfile" id="file" required>
    
    <br><br>
    
    <button type="submit">Upload</button>
  
  </form>`)
})

app.post("/upload",upload.single('myfile'),(req,resp)=>{
    resp.send({
        message:"file uploaded",
        status:200,
        info:req.file
    })
})
app.listen(3200)