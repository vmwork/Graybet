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

(function(){
    
// dark style mod
const body = document.querySelector('body');
const header = document.querySelector('header');

const headerUl = document.querySelector('header ul');
const headerContent = header.querySelector('.header-content');
// button
const headerContentImgg = header.querySelector('.header-content img');
// end
const earnsEveryh2 = document.querySelector('.earns-every h2');
const earnsEveryP = document.querySelector('.earns-every p');


const profitTodayH2 = document.querySelector('.profit-today h2');
const obviousBefenefitsH2 = document.querySelector('.obvious-befenefits h2');
const offers = document.querySelector('.offers');
const offersH2 = document.querySelector('.offers h2');
const footer = document.querySelector('footer');
const profitTodaySliderButtonsDiv = document.querySelector('.profit-today-slider__buttons div');
// в цикл
const advantagesDiv = document.querySelectorAll('.advantages div');
const advantagesP =document.querySelectorAll('.advantages p');
const advantagesLi =document.querySelectorAll('.advantages li');
const headerA = document.querySelectorAll('header a');
const profitTodayDiv = document.querySelectorAll('.profit-today div');
const profitTodayli = document.querySelectorAll('.profit-today li');
const obviousBefenefitsSpan = document.querySelectorAll('.obvious-befenefits span');
const obviousBefenefitsP = document.querySelectorAll('.obvious-befenefits p');
const offersP = document.querySelectorAll('.offers p');
const footerA = document.querySelectorAll('footer a');
const footerLi = document.querySelectorAll('footer li');





if(
  headerContentImgg.addEventListener('click', darkTheme)  
)


function darkTheme (e){
    e.preventDefault();
    body.classList.toggle('darkStyle')
    header.classList.toggle('darkStyle')
   
    headerUl.classList.toggle('darkStyle')
    headerContent.classList.toggle('darkStyle')
    earnsEveryP.classList.toggle('darkStyle')
    earnsEveryh2.classList.toggle('darkStyle')
    obviousBefenefitsH2.classList.toggle('darkStyle')
    profitTodayH2.classList.toggle('darkStyle')
    offers.classList.toggle('darkStyle')
    offersH2.classList.toggle('darkStyle')
    footer.classList.toggle('darkStyle')
    profitTodaySliderButtonsDiv.classList.toggle('darkStyle')

    for (let i = 0; i < advantagesDiv.length; i++ ){
        advantagesDiv[i].classList.toggle('darkStyle-helper')
    }
    for (let i = 0; i < advantagesP.length; i++ ){
        advantagesP[i].classList.toggle('darkStyle-helper')
    }
    for (let i = 0; i < profitTodayDiv.length; i++ ){
        profitTodayDiv[i].classList.toggle('darkStyle')
    }
    for (let i = 0; i < obviousBefenefitsSpan.length; i++ ){
        obviousBefenefitsSpan[i].classList.toggle('darkStyle-helper')
    }
    for (let i = 0; i < obviousBefenefitsP.length; i++ ){
        obviousBefenefitsP[i].classList.toggle('darkStyle')
    }
    for (let i = 0; i < offersP.length; i++ ){
        offersP[i].classList.toggle('darkStyle')
    }
    for (let i = 0; i < footerA.length; i++ ){
        footerA[i].classList.toggle('darkStyle')
    }
    for (let i = 0; i < footerLi.length; i++ ){
        footerLi[i].classList.toggle('darkStyle')
    }
    for (let i = 0; i < headerA.length; i++ ){
        headerA[i].classList.toggle('darkStyle')
    }
    for (let i = 0; i < advantagesLi.length; i++ ){
        advantagesLi[i].classList.toggle('darkStyle')
    }
    for (let i = 0; i < profitTodayli.length; i++ ){
        profitTodayli[i].classList.toggle('darkStyle')
    }

    
}
// const profitTodaySlider = document.querySelector('.profit-today-slider');
// const swiperSlide = profitTodaySlider.querySelectorAll('.swiper-slide');

// if(swiperSlide && window.screen.availWidth === 1920){
// for(let i = 0; i < swiperSlide.length; i++){
//     setTimeout(() => {
//        swiperSlide[i].style.width = '600px';
//        swiperSlide[i].style.margin = '0' 
//     }, );
    
// }
// }



})();