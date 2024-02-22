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

console.table(slidesArr)

leftButton.addEventListener("click", () => {
    window.location.hash = findPrevSlide()
    
    
});

rightButton.addEventListener("click", () => {
    window.location.hash = findNextSlide()
})

function findPrevSlide() {
    const currentSlide = window.location.hash.substr(1);
    const currentSlideIndex = slidesArr.indexOf(currentSlide);
    const newSlideIndex = (currentSlideIndex - 1 + slidesArr.length) % slidesArr.length;
    const newSlide = "#" + slidesArr[newSlideIndex]

    return newSlide;
};

function findNextSlide() {
    const currentSlide = window.location.hash.substr(1);
    const currentSlideIndex = slidesArr.indexOf(currentSlide);
    const newSlideIndex = (currentSlideIndex + 1 + slidesArr.length) % slidesArr.length;
    const newSlide = "#" + slidesArr[newSlideIndex];

    return newSlide;

}