const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    const header = fs.readFileSync("header.html", "utf-8",)
    const style = fs.readFileSync("style.css", "utf-8",)
    if (req.url === "/") {

        fs.readFile("home.html", "utf-8", (error, data) => {
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

        fs.readFile(file + ".html", "utf-8", (error, data) => {
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