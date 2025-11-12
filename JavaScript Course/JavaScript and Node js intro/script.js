alert("hello world");

console.log("conslole is running...");

var a = prompt("Enter a number: ");
console.log("your number is -->"+a);

var isTrue = confirm("Are you sure you want to delete this page?");

if(isTrue){
    console.log("Your page is deleted");
}
else{
    console.log("Your page is safe");
}

document.title = "Lets party ";
document.body.style.backgroundColor = "lightblue";
document.body.style.fontFamily = "Arial";