//Here we will learn to get input through terminal
const http = require('http')
const arg = process.argv
//In Node.js, process.argv is an array that contains everything you typed when running your script from the terminal.
const port = arg[2]
console.log(port);

const server = http.createServer((req, res) => {
    res.write(`server is running at port ${port}`)
    res.end()
})

server.listen(port);
