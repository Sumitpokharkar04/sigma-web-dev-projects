flow of react
browser renders index.html => in index.html we have Main.jsx => In main.jsx we have App.jsx

App.jsx is the file where we import components of entire website.

Then we Call App.jsx in Main.jsx and then we create a div with id root and pass main.jsx in script tag

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>

This is how the flow goes when the browser renders a react project.

Now lets see what are fragments 

<>
code....
</>

1) fragments are empty tags used as a container to contain or wrap the code.

2) fragments do not appear in the DOM tree in browser.

3) They are used when we have to return multiple divs from a certain function.

Now what is jsx...

1) Jsx stands from javascript xml.

2) We know ejs that is embeded javascript where we embed javascript inside a html file, well jsx is apposite of that here we embed or write HTML tags inside a javascript code or file

3) for writting html in simple JS file we do something like this

    var name = document.createElement('h1')
    h1.setAtrribute("Hello")

But inside a jsx file this process is very simple:

var h1 = <h1>Hello</h1>

Also for functions we do something like this

    function app()
    {
        console.log("hello");
    }

//either we call it like this
    app() 
//or like this
    <app/>