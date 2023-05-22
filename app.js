const MENUITEMS = document.querySelectorAll('li.menu-item.special');
const ARROWS = document.querySelectorAll('li.menu-item i');
const BARS = document.querySelector('.bars');
const NAV = document.querySelector('nav');
const CANCEL = document.querySelector('.x');
const OVERLAY = document.querySelector('.overlay');


MENUITEMS.forEach(item => item.addEventListener('click', () => {
    let childOne = item.firstElementChild;
    let childTwo = item.children[1];
    childTwo.classList.toggle('active');
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

// MENUITEMS.forEach(item => item.addEventListener('mouseout', () => {
//     let childOne = item.firstElementChild;
//     let childTwo = item.children[1];
//     childTwo.classList.toggle('active');
//     childOne.classList.toggle('fa-angle-down');
//     childOne.classList.toggle('fa-angle-up');
// }))

