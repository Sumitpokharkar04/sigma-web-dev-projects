//lets revise promises
function walkdog(callback)
{
    setTimeout(()=>{
        console.log("walk the dog");
        callback();
    },2500)
}

function clean(callback)
{
    setTimeout(()=>{
        console.log("lets clean the house");
        callback();
    },1500)
}

function wash(callback)
{
    setTimeout(()=>{
        console.log("lets wash the clothes");
        callback();
    },2000)
}

//now if we want to arrange this tasks one by one we will use callbacks just like we call function inside a function

// walkdog(()=>{
//     clean(()=>{
//         wash(()=>{
//             console.log("all tasks completed");
//         })
//     })
// })
//now this is one way to execute asynchronous tasks on our will but this method introduces something known as callback 
//hell there are various good methods to improve our work one of which are promises lets see them

/* now for starters lets use three tasks for refernce readNewspaper , writeArticle , playFootball */

function read()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i read the newspaper");
        }, 2500);
    })
}


function write()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I wrote an article");
        }, 1500);
    })
}


function play()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I played football");
        }, 2000);
    })
}

read().then(value=>{
    console.log(value);
    return write(); 
}).then(value=>{
    console.log(value);
    return play();
}).then(value=>{
    console.log(value);
    console.log("All tasks completed");
    
})