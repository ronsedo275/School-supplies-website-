const navLinks = document.querySelectorAll(".navList");
const darkToggle = document.querySelector(".darkToggle");
const body = document.querySelector("body");

navLinks.forEach(function (element) {
    element.addEventListener('click', function (){
        navLinks.forEach((e) => {
            e.classList.remove('active');
            this.classList.add('active');
        });
    });
});

darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
});