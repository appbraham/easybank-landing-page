let toggle = false;
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".bg-nav");

hamburger.addEventListener("click", showMenu);

function showMenu(){
    hamburger.classList.toggle("close");
    menu.classList.toggle("activate")
    toggle = !toggle;
}