const queryString = require('querystring')
function userDataSubmit(req,res)
{
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
}

module.exports=userDataSubmit;