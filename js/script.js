const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");
const modal = document.querySelector(".modal");
const body = document.body;

openButton.addEventListener("click", () => {
    modal.style.display = "flex";
    body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.overflow = "auto";
});

// TS VERSION
/*
    const openButton = document.querySelector(".open-button") as HTMLButtonElement;
    const closeButton = document.querySelector(".close-button") as HTMLButtonElement;
    const modal = document.querySelector(".modal") as HTMLDivElement;
    const body = document.body;

    openButton.addEventListener("click", () => {
        modal.style.display = "flex";
        body.style.overflow = "hidden";
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        body.style.overflow = "auto";
    });
*/


// Scroll

function scl() {
    var reveals = document.querySelectorAll(".suggestion-list");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        // Check if the element is within the viewport
        if (elementTop < windowHeight - elementVisible && elementTop > -elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", scl);

function reveal() {
    var reveals = document.querySelectorAll(".limitation-section");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);