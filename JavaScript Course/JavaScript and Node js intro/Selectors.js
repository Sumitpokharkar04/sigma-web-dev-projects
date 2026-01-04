let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "yellow";

document.getElementById("red").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "blue";

// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "green";
// });

Math.random();

let boxNodeList = document.querySelectorAll(".box");
boxNodeList.forEach(e => {
    e.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
});