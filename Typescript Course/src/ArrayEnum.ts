const chai : string[] = ['hello']

// chai = ['hello'];

const price : number[] = [1,2,3,4,5]

// lets see now how we can make or declare array of objects.

type xyz = {
    name:string
    price:number
}

let menu : xyz[];

menu =  [{ name:'pavbhaji', price:120 }]

// lets see how can we make readonly arrays

let array : readonly string[] = ["sumit"]

//lets make a 2D array

let matrix : number [] [] ;

matrix =[
    [1,2,3],
    [4,5,6]
]


//lets now understnad what a tuple is In TypeScript, 
// a tuple is a specialized type of array with a fixed number
//  of elements where the type of each element at a specific position is explicitly defined.

// so if you do something like let tuple : [string,number]; then this can hold only two values one string and other number.

let tuple : [string,number];

// tuple = [23,'sumit']
tuple = ['sumit',23]

// Tuple values are fixed and compulsory but you can make some propertis optional

let newTuple : [string , number , boolean?];

newTuple = ['sumit',23]
newTuple = ['sumit',23,true];

// Now we can also make named tuple means we can give names to their values and it is also a industry standard.

let namedTuple : [name:string,age:number];

namedTuple = ['sumit',23]

type mood = "Happy" | "sad" | "anxious"

let myMood : mood = "Happy"


enum cupsize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = cupsize.LARGE

