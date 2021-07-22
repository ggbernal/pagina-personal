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