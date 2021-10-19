window.addEventListener('DOMContentLoaded' , function() {
  document.querySelector('#burger-button').addEventListener('click' , function() {
    document.querySelector('#header-top__list').classList.toggle('is-active')
    document.querySelector('.header-top__link-enter').classList.toggle('is-active')
    var offsetHeightHeaderTop = document.querySelector('.header-top').offsetHeight
    var offsetHeightImg = document.querySelector('.swiper').offsetHeight
    var burgerHeight = offsetHeightImg - offsetHeightHeaderTop - 80;
    document.querySelector('.header-top__list').style.height = burgerHeight + "px";
    console.log(burgerHeight);

    document.querySelectorAll('.header-top__link').forEach(function(tabContent) {
      tabContent.classList.toggle('voiceover-hidden')
    })

  })
})