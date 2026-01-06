let button = document.getElementById('btn');

button.addEventListener("dblclick",()=>{
    document.querySelector('.box').textContent = "Content changed successfully!";
    //or you can use innerHTML
    //document.querySelector('.box').innerHTML = "<h1>Content changed successfully!</h1>";
    // e is the event object which is optional parameter and can be used to get more info about the event also 
    // e.target can be used to get the element on which the event is fired
})