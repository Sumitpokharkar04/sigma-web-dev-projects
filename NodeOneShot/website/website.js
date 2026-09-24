const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer((req, res) => {
    const header = fs.readFileSync(path.join(__dirname, "header.html"), "utf-8")
    const style = fs.readFileSync(path.join(__dirname, "style.css"), "utf-8")
    if (req.url === "/") {

        fs.readFile(path.join(__dirname, "home.html"), "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "content-type": "text/plain" })
                res.write("internal server error")
                res.end()
                return;
            }

            res.writeHead(200, { "content-type": "text/html" })
            res.end(header + data)

        })
    }
    else if (req.url === "/style.css") {
        res.writeHead(200, { "content-type": "text/css" , "Cache-Control": "public, max-age=3600" })
        res.end(style)
    } else if (req.url !== "/") {
        let file = req.url.slice(1)
        console.log(file);

        fs.readFile(path.join(__dirname, file + ".html"), "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "content-type": "text/plain" })
                res.write("internal server error")
                res.end()
            }
            else {
                res.writeHead(200, { "content-type": "text/html" })
                res.write(header + data)
                res.end()
            }
        })
    }
}).listen(4800)
