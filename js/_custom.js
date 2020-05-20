(function(){
    const openMenuButton = document.querySelector('.header__mobileBurger');
    const mobileMenu = document.querySelector('.header-content ul')
    
    if(openMenuButton){
        openMenuButton.addEventListener('click', () => {
            openMenuButton.classList.toggle('mobileBurger-open')
            mobileMenu.classList.toggle('open-menu')
        })
    }
    const buttonsProfitSlider = document.querySelectorAll('.profit-today-slider__buttons button');
    const buttonsProfitSlider2 = document.querySelectorAll('.offers-slider__buttons button');
    
    const profitSliderContent = document.querySelector('.profit-today-slider');
    const profitSliderContent2 = document.querySelector('.offers-slider');

    if (buttonsProfitSlider && buttonsProfitSlider){
        buttonsProfitSlider[0].addEventListener('click', scrollLeft)
        buttonsProfitSlider[1].addEventListener('click', scrollright)
        buttonsProfitSlider2[0].addEventListener('click', scrollLeft2)
        buttonsProfitSlider2[1].addEventListener('click', scrollright2)
    
        function scrollLeft(){
            let sltimeOut= setInterval(() => {profitSliderContent.scrollLeft += 2 }, 2); 
             setTimeout(() => {clearInterval(sltimeOut);}, 1170);}
        function scrollright(){
            let sltimeOut= setInterval(() => {profitSliderContent.scrollLeft -= 2 }, 2);  
             setTimeout(() => {clearInterval(sltimeOut);}, 1150);
            }
            function scrollLeft2(){
                let sltimeOut= setInterval(() => {profitSliderContent2.scrollLeft += 2 }, 2); 
                 setTimeout(() => {clearInterval(sltimeOut);}, 800);}
            function scrollright2(){
                let sltimeOut= setInterval(() => {profitSliderContent2.scrollLeft -= 2 }, 2);  
                 setTimeout(() => {clearInterval(sltimeOut);}, 800);
                }

        
    }
   

    
    
})();
