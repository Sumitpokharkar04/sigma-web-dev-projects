const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("home.html", "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "content-type": "text/plain" })
                res.write("internal server error")
                res.end()
                return;
            }

            res.writeHead(200, { "content-type": "text/html" })
            res.end(data)

        })
    }
    else if (req.url === "/style.css") {
        fs.readFile("style.css", "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "content-type": "text/plain" })
                res.write("internal server error")
                res.end()
                return;
            }

            res.writeHead(200, { "content-type": "text/css" })
            res.end(data)
        })
    }
}).listen(4800)