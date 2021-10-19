document.addEventListener('DOMContentLoaded', function() {
  if (swiper.realIndex = "0") {
    document.querySelector('.header__background_nature').classList.remove('anim-blanchard')
    document.querySelector('.header__background_angels').classList.remove('anim-blanchard')
    document.querySelector('.header__background_castle').classList.add('anim-blanchard')
  }
  if (swiper.realIndex = "1") {
    document.querySelector('.header__background_nature').classList.remove('anim-blanchard')
    document.querySelector('.header__background_angels').classList.add('anim-blanchard')
    document.querySelector('.header__background_castle').classList.remove('anim-blanchard')
  }
  if (swiper.realIndex = "2") {
    document.querySelector('.header__background_nature').classList.add('anim-blanchard')
    document.querySelector('.header__background_angels').classList.remove('anim-blanchard')
    document.querySelector('.header__background_castle').classList.remove('anim-blanchard')
  }
})

