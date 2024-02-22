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


