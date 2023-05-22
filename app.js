const ARROWS = document.querySelectorAll('li.menu-item i');
const BARS = document.querySelector('.bars');
const NAV = document.querySelector('nav');
const CANCEL = document.querySelector('.x');
const OVERLAY = document.querySelector('.overlay');
const MENUS = document.querySelectorAll('.menu-container');

MENUS.forEach(item => item.addEventListener('mouseover', () => {
    let listItem = item.children[0];
    let childOne = listItem.children[0];
    childOne.classList.toggle('fa-angle-down');
    childOne.classList.toggle('fa-angle-up');
}))

MENUS.forEach(item => item.addEventListener('mouseout', () => {
    let listItem = item.children[0];
    let childOne = listItem.children[0];
    childOne.classList.toggle('fa-angle-down');
    childOne.classList.toggle('fa-angle-up');
}))

BARS.addEventListener('click', () => {
    NAV.classList.toggle('active');
    OVERLAY.classList.toggle('active');
})

CANCEL.addEventListener('click', () => {
    NAV.classList.toggle('active');
    OVERLAY.classList.toggle('active');
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        NAV.classList.remove('active');
        OVERLAY.classList.remove('active');
    }
})



