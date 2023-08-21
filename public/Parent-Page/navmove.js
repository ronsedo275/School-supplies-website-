const navBar = document.querySelector("nav");
const navToggle = document.querySelector(".navToggle");

navToggle.addEventListener('click', () => {
    navBar.classList.toggle('close');
});