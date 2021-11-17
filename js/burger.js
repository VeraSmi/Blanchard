window.addEventListener('DOMContentLoaded' , function() {
  document.querySelector('#burger-button').addEventListener('click' , function() {
    document.querySelector('.header-top__button').classList.add('is-active')
    document.querySelector('#header-top__list').classList.add('is-active')
    document.querySelector('.header-top__link-enter').classList.add('is-active')
    document.querySelector('.header-top__menu-container').classList.add('is-active')
    var burgerHeight = document.querySelector('.hero').offsetHeight;
    document.querySelector('.header-top__menu-container').style.height = burgerHeight + "px";
    console.log(burgerHeight);

  })

    document.querySelector('.header-top__button').addEventListener('click' , function() {
      document.querySelector('.header-top__button').classList.remove('is-active')
      document.querySelector('#header-top__list').classList.remove('is-active')
      document.querySelector('.header-top__link-enter').classList.remove('is-active')
    document.querySelector('.header-top__menu-container').classList.remove('is-active')

    })
})