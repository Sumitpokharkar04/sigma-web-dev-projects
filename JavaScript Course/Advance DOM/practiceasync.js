//aync and Await Practice only works with Promises because they are built on top of Promises
//An async function always returns a Promise because they are wrapped in a Promise implicitly
//if we dont use promise inside an async function it will return a resolved promise with that value

async function getData()
{
    setTimeout(() => {
        return 42;
    }, 3000);

    
}

async function main(){
    console.log("Start");

    console.log("Do something else");

    let data = await getData();

    console.log("Data fetched");

    console.log("Process Data");

    console.log("End");
}

main();
