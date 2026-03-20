const { request } = require('express')
const http = require('http')
http.createServer((request,response)=>{
    response.write("<h1>sumit pokharkar</h1>")
    response.end("process completed")
}).listen(4800)