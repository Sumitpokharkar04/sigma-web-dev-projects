import express from 'express'
const app = express()
const port = 3200
//http://localhost:3200/about?age=20
function checkAge(req,resp,next)
{
    const ageParam = req.query.age;

    if (ageParam === undefined) {
        return resp.status(400).send("Age is required");
    }

    const age = Number(ageParam);

    if (!Number.isFinite(age)) {
        return resp.status(400).send("Invalid age");
    }

    if (age > 18) {
        next();
    } else {
        resp.status(403).send("Alert ! you are under age");
    }
}


app.get("/",(req,resp)=>{
    resp.send("Home Page")
})

app.get("/about", checkAge, (req,resp)=>{
    resp.send("about Page")
})

app.listen(port)


