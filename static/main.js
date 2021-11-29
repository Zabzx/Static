//Header scroll
const headerContainer = document.querySelector('.header-container');
const headerLinks = document.querySelectorAll('.header-link');

window.addEventListener('scroll', () => {
    headerContainer.classList.toggle('header-sticky', window.scrollY > 50);

    if(screen.width < 700){
        headerContainer.classList.remove('header-sticky');
        return;
    }

    if (window.scrollY > 50){
        headerLinks.forEach(link => {
            link.classList.add('link-black')
        });
    } else {
        headerLinks.forEach(link => {
            link.classList.remove('link-black');
        });
    };
});

//Navbar
const html = document.querySelector('html');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    if (navLinks.classList.contains('nav-active')) {
        html.style.overflow = 'hidden'
    } else {
        html.style.overflow = 'auto';
    }
});