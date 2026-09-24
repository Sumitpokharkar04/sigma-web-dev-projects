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
                res.write("<h1>data submitted</h1>")
                res.end()
            })

        }
    })
})

server.listen(4800)

/*
🔑 What req.on('data') and req.on('end') mean
These are event listeners on the request stream:

req.on('data', callback)  
→ Runs every time a chunk of request body data arrives.
Example: if you upload a file or submit a form, the body might arrive in multiple pieces. Each piece triggers this event.

req.on('end', callback)  
→ Runs once, after all chunks have been received.

Why the keywords are “data” and “end”
They’re not arbitrary — they’re predefined event names in Node.js streams:

"data" → emitted whenever new data is available.

"end" → emitted when the stream has no more data to give.

So yes, they’re intentional. You’re subscribing to those specific events on the request object.*/ 