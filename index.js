(function toggleMenuVisibility() {
    
    const xButton = document.getElementById("x-mark");
    const menuBtn = document.getElementById("menu-bar");
    
    xButton.addEventListener("click", toggleVisibility);
    
    menuBtn.addEventListener("click", toggleVisibility);
    
    function toggleVisibility() {
        const div = document.getElementById("overlay");
        const liEls = document.querySelectorAll(".li-el");
        div.classList.toggle("visible");
        liEls.forEach(el => {
            el.classList.toggle("visibleToo");
        })
        
    }

})();


const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");
const slides = document.querySelectorAll(".slide");
const slidesArr = []

slides.forEach(slide => {
    slidesArr.push(slide.getAttribute("id"))
});


leftButton.addEventListener("click", () => {
    window.location.hash = findNewSlide("prev")
});

rightButton.addEventListener("click", () => {
    window.location.hash = findNewSlide("next")
});
    
function timerForSlides() {
    window.location.hash = findNewSlide("next");

};

setInterval(timerForSlides, 5000);


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