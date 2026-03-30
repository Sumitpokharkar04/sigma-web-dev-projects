How to import html or any other file from other folders ?

code =>

==import.meta.url => This thing gives url of current file where developer is.==
==fileURLToPath => This converts that url into path,we have to import it first from url module.==


    const __filename = fileURLToPath(import.meta.url)
    console.log(__filename);
    Output => D:\sigma-web-dev-projects\ExpressOneShot\middlewares\Built_In.js

Once we have file path then we want directory of current path

==const __dirname = path.dirname(__filename) => This gives directory name of the path==

    const __dirname = path.dirname(__filename)
    console.log(__dirname);
    Output => D:\sigma-web-dev-projects\ExpressOneShot\middlewares


This line is most important,lets disect it 
first path.join joins two paths,so we first take directory name that is :
==D:\sigma-web-dev-projects\ExpressOneShot\middlewares==

==Now as we know that our home.html is in other folder named pages so these line => "../" jumps one
folder out that is main folder that consist pages folder which has home.html and now we connect dirname to this ../pages/home.html.==

    const absPath = path.join(__dirname, '../pages/home.html')

    console.log(absPath)
    Output => D:\sigma-web-dev-projects\ExpressOneShot\pages\home.html