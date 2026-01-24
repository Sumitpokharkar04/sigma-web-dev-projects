const data = [
{name: "Butters", age: 3,type: "dog" },
{name: "Lizzy", age: 6,  type: "dog"},
{name: "Red", age: 1, type: "cat" },
{name: "Joey",age: 3, type: "dog" }
];

/*Q1. Write a  function which will display all records  with type ==='dog'
function Name ---> findAllDogs(data)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with the data in form of array
HINT : Use filter.*/

const findAllDogs = data.filter((item) => item.type==='dog')
console.log(findAllDogs);


console.log("===================================")


const findAllDogs1 = (data) => {
    const result = data.filter((item) => item.type === "dog");
    return result;
}
console.log(findAllDogs1(data));

// Q2. Write a  function which will display all the records starting with name 'B' or any character passed as parameter.
// function Name ---> findSpecificStartChar(data,'B')
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with  the data in form of array.
// HINT : Use filter and string functions.

const findSpecificStartChar = (data)=>{

    const result = data.filter((item) => item.name.substring(0,1)==="B")
    const result1 = data.filter(item => item.name.startsWith("B"));
    
    return result;

}

console.log(findSpecificStartChar(data));

/*
Q3. Write a  function which will display sum of all ages.
function Name ---> findSumAges(data)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with  the data in form of array.
HINT : Use reduce functions.
*/

try {const sum = data.reduce((acc,data)=>acc+data.age,0)
console.log(sum);
}catch(error){
    console.error( "NO RECORDS FOUND");
}

