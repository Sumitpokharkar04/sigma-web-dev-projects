const http = require('http')
const userForm = require('./userForm')
const userDataSubmit = require("./userDataSubmit")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    if(req.url==="/" && req.method==="GET")
    {
        userForm(req,res)
        res.end()
    }
    else if(req.url==="/submit" && req.method==="POST")
    {
        userDataSubmit(req,res)
        res.end()
    }

    

})

server.listen(4800)