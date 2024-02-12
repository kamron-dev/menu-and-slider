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


const carouselBtns = document.querySelectorAll("[data-carousel-btn]");

carouselBtns.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})