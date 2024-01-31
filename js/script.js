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