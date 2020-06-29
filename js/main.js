const menuLink = document.querySelector('.link--menu');
const menu = document.querySelector('.nav__header');
const menuImage = document.querySelector('.img__menu');
const menuItems = menu.querySelectorAll('.menu__item');
let selector, action;

for (let currentItem = 0; currentItem < menuItems.length; currentItem++) {
    menuItems[currentItem].addEventListener('click', function () {
        for (let menuItem = 0; menuItem < menuItems.length; menuItem++) {
            if (menuItems[menuItem].classList.contains('selected'))
                menuItems[menuItem].classList.remove('selected');
        }
        toggleClass(menuItems[currentItem], 'selected')
    });
}

if (menu.classList.contains('visible')) {

}

menuLink.addEventListener('click', function () {
   toggleClass(menu, 'visible');
   toggleClass(menuLink, 'open');
});

function toggleClass(selector, action) {
    selector.classList.toggle(action);

    if (selector.classList.contains('open'))
        menuImage.src = '../img/icon-close.svg';
    else
        menuImage.src = '../img/icon-hamburger.svg';
}
