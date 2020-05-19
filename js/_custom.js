(function(){
    const openMenuButton = document.querySelector('.header__mobileBurger');
    const mobileMenu = document.querySelector('.header-content ul')
    
    if(openMenuButton){
        openMenuButton.addEventListener('click', () => {
            openMenuButton.classList.toggle('mobileBurger-open')
            mobileMenu.classList.toggle('open-menu')
        })
    }
})();