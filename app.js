const ham = document.querySelector('.header__icon-hambuger')
const nav = document.querySelector('.header__nav') 

console.log(nav.classList)
nav.classList.add('.header__nav-show')
console.log(nav.classList)

ham.addEventListener('click', () => {
    nav.classList.toggle('header__nav-show');
})