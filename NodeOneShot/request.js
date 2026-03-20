const http = require('http')

const server = http.createServer((req,res)=>{

    console.log(req.url);

    if(req.url=="/")
    {
      res.write("hello")
    }
    else if(req.url=="/login"){
 res.write("login page")
    }
    else{
        res.write("others")
    }
    
    
    res.end()

})

server.listen(4800)
