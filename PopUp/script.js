const submitButton = document.querySelector(".btn");
const popUp = document.querySelector(".pop-up");

function showPopup() {
    popUp.classList.remove("close-popup");
    popUp.classList.add("open-popup");
};

function closePopup() {
    popUp.classList.remove("open-popup");
    popUp.classList.add("close-popup");
};