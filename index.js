const xButton = document.getElementById("x-mark");
const menuBtn = document.getElementById("menu-bar");

xButton.addEventListener("click", () => {
    const div = document.getElementById("overlay");
    const li = document.getElementsByClassName("li-el");
    div.classList.toggle("visible");
    
    // div.classList.toggle("hidden");
});

menuBtn.addEventListener("click", () => {
    const div = document.getElementById("overlay");
    div.classList.toggle("visible");
    // div.classList.toggle("hidden");
});