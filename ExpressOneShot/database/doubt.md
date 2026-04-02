app.set("views",path.join(__dirname,'../views'))//this tells the location of ejs files

resp.render('showData',{students}) => this just renders the file whose location is provided by app.set so absolute path should be ib app.set




🧠 Why does insertOne() return a Promise?

Even if you don’t need anything, MongoDB still needs to:

connect to database server
send your data over network
wait for confirmation
generate _id
confirm insertion

👉 All this takes time (milliseconds) — it’s not instant.

⚡ Node.js works asynchronously

Node.js does NOT wait for slow operations.

So instead of blocking, it says:

“I’ll give you a Promise, and you can wait if you want”

🧩 What insertOne() actually returns

It returns a Promise that resolves to:

{
  acknowledged: true,
  insertedId: ObjectId("...")
}
❗ Important Point

👉 It’s NOT about “returning for you”
👉 It’s about telling you when the operation is finished

🔄 What happens in your code
Without await:
const result = collection.insertOne(req.body)
console.log(result)

👉 Output:

Promise { <pending> }

Because:

insertion is still happening
Node didn’t wait
With await:
const result = await collection.insertOne(req.body)
console.log(result)

👉 Now:

Node waits
operation completes
real result is printed ✅
🤔 “But I don’t need the result”

Totally fair 👍

You still should use await because:

👉 It ensures:

data is actually inserted before response
no silent failures
proper execution order
⚠️ Without await (danger)
collection.insertOne(req.body)
resp.send("data saved")

👉 Problem:

response sent BEFORE insert finishes
if insert fails → you won’t know ❌
✅ Best Practice

Even if you don’t use result:

await collection.insertOne(req.body)
resp.send("data saved")
🎯 Final Understanding

👉 MongoDB returns a Promise because:

database operations take time
Node.js is asynchronous
Promise lets you control when it finishes
💡 Simple Analogy

Ordering food 🍔:

You place order → Promise
Food arrives → resolved

You can:

ignore it ❌ (bad idea)
wait for it ✅ (await)