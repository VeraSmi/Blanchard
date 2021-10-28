window.addEventListener('DOMContentLoaded' , function() {
   form = document.querySelector('.search__form');
   input = document.querySelector('#search__input_top');

   document.querySelector('.search__button').addEventListener('click', function() {
        document.querySelector('#search__form_top').classList.toggle('is-open');
        document.querySelector('.header-top__search').classList.toggle('is-open');
        document.querySelector('.search__button-cross-sign').classList.toggle('is-open');
        document.querySelector('.hidden-element').classList.toggle('display');
      //   document.querySelector('.header-top__img').classList.toggle('display-none');
        input.value = "";
   })
   document.querySelector('.search__button-cross-sign').addEventListener('click', function() {
      document.querySelector('.search__button-cross-sign').classList.toggle('is-open');
      document.querySelector('#search__form_top').classList.toggle('is-open');
      document.querySelector('.header-top__search').classList.toggle('is-open');
      document.querySelector('.hidden-element').classList.toggle('display');
      // document.querySelector('.header-top__img').classList.toggle('display-none');
      input.value = "";

 })
})
