const navLinks = document.querySelector('.nav-links')
const openMenu = document.getElementById('icon-menu')
const closeMenu = document.getElementById('icon-close')

openMenu.addEventListener('click',show)
closeMenu.addEventListener('click',close)

function show(){
    navLinks.style.display = 'flex';
    navLinks.style.top = '0';
}

function close(){
    navLinks.style.top = '-100%';
}

window.onscroll = function() {addSticky()};

// get the navbar
const menu = document.querySelector('.prueba')
const sticky = menu.offsetTop;

function addSticky(){
    if (window.pageYOffset >= sticky) {
        menu.classList.add("sticky")

    } else {
        menu.classList.remove("sticky")
    }
}