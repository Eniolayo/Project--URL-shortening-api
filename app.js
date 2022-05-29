const ham = document.querySelector('.header__icon-hambuger')
const nav = document.querySelector('.header__nav') 
const btnCopy = document.querySelector('.shortened__btn');

nav.classList.add('.header__nav-show')

ham.addEventListener('click', () => {
    nav.classList.toggle('header__nav-show');
})



btnCopy.addEventListener('click', () =>{
    btnCopy.textContent = 'Copied!';
})