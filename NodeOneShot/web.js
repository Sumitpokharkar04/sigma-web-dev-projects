const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    fs.readFile('html/web.html','utf-8',(err,data)=>{
        if(err)
        {
            res.writeHead(500,{"content-type":"text/plain"})
            res.writable('internal server error')
            res.end()
            return
        }
        else
        {
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data)
            res.end()
        }
    })
})

server.listen(4800)


/* Notes: 

1. res.write()

👉 Used to send data (body) to the client

res.write("Hello ");
res.write("World");
Sends chunks of response
Can be called multiple times
Doesn’t end the response (you still need res.end())

✔️ Think: “I am writing content to the response body”

🔹 2. res.writable

👉 This is NOT a function, it's a property (boolean)

console.log(res.writable); // true or false
Tells whether the response stream is still writable
If false, you can’t send more data

✔️ Think: “Can I still write data or not?”

🔹 3. res.writeHead()

👉 Used to set HTTP status code + headers

res.writeHead(200, { "Content-Type": "text/plain" });
Must be called before res.write()
Defines things like:
Status code (200, 404, etc.)
Headers (Content-Type, etc.)

✔️ Think: “I am defining metadata of the response”

*/