/*lets practice promises lets do three tasks
task1 walk the dog
task 2 clean the kitchen
task 3 make food*/

//lets first see traditional callback hell

function walkdog(callback)
{
    setTimeout(()=>{
        console.log("you walked the dog ")
        callback();
    },2500);
}


function clean(callback)
{
    setTimeout(()=>{
        console.log("you cleaned the kitchen ")
        callback();
    },1000);

};

function food(callback)
{
    setTimeout(()=>{
        console.log("you made the food")
        callback();
    },500);

}

walkdog(()=>{
    clean(()=>{
        food(()=>{
            console.log("all tasks completed")
        })
    })
})

//just normal nested function calling that is what callback hell is

//now we can do this same thing using promises and avoiding callback hell
//lets do 3 tasks morning walk,breakfast,reading newspaper

//now to make this tasks execute in order we can wrap them in promises

function morining()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(console.log("hello world"))
    },2000)
    })
}

function breakfast()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("you did your breakfast")
    },1000)
    })
}

function newspaper()
{
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve("you read your newspaper")
    },900)
   })
}

morining().then(value=>{
    console.log(value); 
    return breakfast();
}).then(value=>{
    console.log(value);
    return newspaper();
}).then(value=>{
    console.log(value);
    console.log("all tasks completed");
}
);

//.then needs a function to pass
//when function in then is resolved its value is passed to the next then
//the last then return undefined if it does not have any function in it
//when function is resolved it gives its value to then to operate so mornig give its resolved value to its then to print