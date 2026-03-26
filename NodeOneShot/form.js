const http = require('http')
const fs = require('fs')
const { ifError } = require('assert')
const queryString = require('querystring')

const server = http.createServer((req,res)=>{
    fs.readFile("html/form.html","utf-8",(error,data)=>{
        if(error)
        {
            res.writeHead(500,{"content-type":"text/plain"})
            res.write("internal server error")
            res.end()
        }
        if(req.url==="/" && req.method==="GET")
        {
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data)
            res.end()
        }
        else if(req.url==="/submit" && req.method==="POST")
        {
            res.writeHead(200,{"content-type":"text/html"})
            let dataBody = []
            req.on('data',(chunk)=>{
                dataBody.push(chunk);
            });

            req.on('end',()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                console.log(readableData);
                
            })
            res.write("<h1>data submitted</h1>")
            res.end()
        }
    })
})

server.listen(4800)