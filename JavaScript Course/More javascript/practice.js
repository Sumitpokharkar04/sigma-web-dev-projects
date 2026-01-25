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


const findAllDogs1 = (data) => {
    const result = data.filter((item) => item.type === "dog");
    return result.length > 0 ? result : "No records found";
}
console.log(findAllDogs1(data));

// Q2. Write a  function which will display all the records starting with name 'B' or any character passed as parameter.
// function Name ---> findSpecificStartChar(data,'B')
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with  the data in form of array.
// HINT : Use filter and string functions.

const findSpecificStartChar = (data, char) =>{

    const result = data.filter((item) => item.name.substring(0,1)==="B")
    const result1 = data.filter(item => item.name.startsWith("B"));
    
    return result;

}

console.log(findSpecificStartChar(data, "B"));

/*
Q3. Write a  function which will display sum of all ages.
function Name ---> findSumAges(data)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with  the data in form of array.
HINT : Use reduce functions.
*/

const findSumAges = (data) => {
    const sum = data.reduce((acc,data) => acc + data.age, 0)
    return sum;
}


/*Q4. Write a  function which will display all the records with only name & ages.
function Name ---> findAll(data)
If there are no records matching criteria then reject with message "NO RECORDS FOUND"
If there are records matching criteria then resolve with  the data in form of array.
HINT : Use map.*/

const findAll = data.map((item)=>{
    return {name:item.name,age:item.age}
})
// console.log(findAll);

const findAll1 = data.map((item) => ({
    name: item.name,
    age: item.age
}));

// console.log(findAll1);


/*Q5. Write a function to display sum of all ages of records having type as dog.
Use nesting  function which first call Q1 function its output will      be given to Q3 and display total of ages
HINT : nesting of functions.*/

const agesum = data.map((item)=>{return item.type==='dog' && item.age}).reduce((acc,data)=>acc+data);
// console.log(agesum);

/*Q6. Write a  function which will display all the records in sorting according to names.
function Name ---> Sorting(data,'ASC')
ASC -> ASCENDING/ DESC -> DESCENDING
If there are no records in array reject with message "NO RECORDS"
If there are records in Array then according to sorting order display result and return in resolve of promises.
HINT : sort on objects*/

const asc = new Promise((resolve,reject)=>{
    resolve (data.sort((a, b) => a.name.localeCompare(b.name)))
})

// asc.then(result=>{
//     console.log(result);
// })
