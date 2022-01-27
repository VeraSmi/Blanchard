window.addEventListener("DOMContentLoaded", function() {
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999 99 99");
  
  im.mask(selector);

  const charMatch = new RegExp('^[а-яА-Я]*$');
  
  new JustValidate('.contacts__left-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 30,
      function: (name, value) => {
        return charMatch.test(value)
      }
    },
    tel: {
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    }
  },
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Имя не должно быть меньше 3-х символов',
      maxLength: 'Имя не должно быть больше 30-ти символов',
      function: 'Недопустимый формат'
    },
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Недопустимый формат'},
  },

});

const form = document.querySelector('.contacts__left-form');

form.addEventListener('submit', function(event){
  event.preventDefault(); 
});


})