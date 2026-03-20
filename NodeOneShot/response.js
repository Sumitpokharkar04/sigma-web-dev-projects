const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")
    res.write("<h2>server running</h2>")
    res.end("This is end")
})
//note -  now if we put h2 or any other tags in response.write it wont recocgnize it
//so for that we use header
server.listen(5800)