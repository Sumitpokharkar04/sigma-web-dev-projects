| Tag      | Purpose                         |
| -------- | ------------------------------- |
| `<% %>`  | Run JS code (loops, conditions) |
| `<%= %>` | Output value to HTML            |
| `<%- %>` | Output unescaped HTML           |

<% %> → for JS logic
HTML outside → treated as string output
<%= %> → inject value into output



While they look similar, they do two completely different jobs. If you only tell Express where the folder is but not what the files are, it won’t know how to read them.
The Difference: "Where" vs. "What"

Think of it like ordering a pizza:

    app.set('views', 'templates') is the Address. You’re telling the delivery driver (Express) exactly which house (folder) to go to.

    app.set('view engine', 'ejs') is the Language. You’re telling the driver that when they get there, the instructions are written in Italian (EJS), so they need an Italian translator to understand them.

What happens if you forget one?
If you forget...	           
    ==app.set('views', ...)==
 =>Express looks in the default /views folder. If your files are in /templates, it will crash with a "Failed to lookup view" error.
   ==app.set('view engine', ...)==
=>	Express won't know which "translator" to use. You would be forced to type the file extension every single time (e.g., res.render('index.ejs') instead of just res.render('index')).
Why we use view engine

If you set the engine to EJS, Express becomes smart.

Without the engine line:
JavaScript

// You have to be specific every time
app.get('/', (req, res) => {
    res.render('index.ejs'); 
});

With the engine line:
JavaScript

app.set('view engine', 'ejs');

// Express assumes you mean .ejs files
app.get('/', (req, res) => {
    res.render('index'); 
});

The "All-in-One" Configuration

In a standard Express app, you will almost always see these two lines working together at the top of your file:
JavaScript

const express = require('express');
const app = express();

// 1. Tell Express WHERE the files are
app.set('views', 'templates'); 

// 2. Tell Express WHAT the files are (the engine)
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
    // Express looks in /templates for index.ejs
    res.render('index'); 
});

Does that clarify why Express needs both the "map" to the folder and the "manual" for the file type?