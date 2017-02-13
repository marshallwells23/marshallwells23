function animateMenu(x) {
    x.classList.toggle("change");
}

document.querySelector('.menu-holder').addEventListener("click", animateMenu(this));
