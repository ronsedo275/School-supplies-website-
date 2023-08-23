const navBar = document.querySelector("nav");
const navToggle = document.querySelector(".navToggle");
const supplies = document.querySelector(".supplies");
const section = document.querySelector("section");

supplies.addEventListener('click', () => {
    section.classList.remove('delete');
});

navToggle.addEventListener('click', () => {
    navBar.classList.toggle('close');
});