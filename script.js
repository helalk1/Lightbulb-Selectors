// Write your code here
let subtitle = document.querySelector(".subtitle");
let bulb1 = document.querySelector("#lightbulb1");
let bulb2 = document.querySelector("#lightbulb2");
let bulb3 = document.querySelector("#lightbulb3");

let count = 0;

let allbulbs = document.querySelectorAll(".lightbulb");

for (let bulb of allbulbs) {
    bulb.addEventListener("click", function () {
        count++;
        subtitle.innerHTML = `You've clicked the lights ${count} times `;
        bulb.classList.toggle("active");
    });
}
