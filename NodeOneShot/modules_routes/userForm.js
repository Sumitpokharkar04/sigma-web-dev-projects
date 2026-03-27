function userForm(req,res)
{
    res.write(`
        <form action="submit" method="post">
        <input type="text" name = "name" placeholder="name">
        <input type="email" name="email" placeholder="email">
        <button>submit</button>
        `)
}

module.exports=userForm;