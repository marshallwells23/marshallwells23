function animateMenu(x) {
    x.classList.toggle("change");
}

document.querySelector('.menu-holder').onClick(animateMenu);
