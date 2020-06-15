import '../scss/main.scss';

/* place your code below */

const btnHamburger = document.querySelector('.hamburger--js');

btnHamburger.addEventListener('click', () => {
    document.querySelector('.menu--js').classList.toggle('menu--open');
})