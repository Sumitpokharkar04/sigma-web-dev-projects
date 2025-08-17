const inputs = document.querySelectorAll("input");
const cat = document.querySelector(".cat");
const dog = document.querySelector(".dog");

inputs.forEach(input => {
            input.addEventListener("focus", () => {
            cat.classList.remove("active");
            dog.classList.add("active");
            });

input.addEventListener("blur", () => {
cat.classList.add("active");
dog.classList.remove("active");
});
});