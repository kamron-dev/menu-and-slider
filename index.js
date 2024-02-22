(function toggleMenuVisibility() {
    
    const xButton = document.getElementById("x-mark");
    const menuBtn = document.getElementById("menu-bar");
    
    xButton.addEventListener("click", () => {
        const div = document.getElementById("overlay");
        div.classList.toggle("visible");
        
        
    });
    
    menuBtn.addEventListener("click", () => {
        const div = document.getElementById("overlay");
        div.classList.toggle("visible");
        
    });


})();


const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");
const slides = document.querySelectorAll(".slide");
const slidesArr = []

slides.forEach(slide => {
    slidesArr.push(slide.getAttribute("id"))
})


leftButton.addEventListener("click", () => {
    window.location.hash = findNewSlide("prev")
});

rightButton.addEventListener("click", () => {
    window.location.hash = findNewSlide("next")
})


function findNewSlide(direction) {
    const currentSlide = window.location.hash.substr(1);
    const currentSlideIndex = slidesArr.indexOf(currentSlide);
    let newSlideIndex;

    if (direction === "next") {
        newSlideIndex = (currentSlideIndex + 1 + slidesArr.length) % slidesArr.length;
    } else if (direction === "prev") {
        newSlideIndex = (currentSlideIndex - 1 + slidesArr.length) % slidesArr.length;
    } else {
        console.log("Invaid direction");
        return null;
    }

    const newSlide = "#" + slidesArr[newSlideIndex];

    return newSlide;
}