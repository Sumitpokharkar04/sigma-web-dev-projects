const http = require('http')

const daTA = [
    {
        name:"sumit",
        age:22
    },
    {
        name:"hari",
        age:19
    }
]

http.createServer((request,response)=>{
    response.write(JSON.stringify(daTA))
    response.end("process completed")
}).listen(6100)