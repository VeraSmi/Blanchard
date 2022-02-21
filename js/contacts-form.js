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
      minLength: 'Имя должно быть длиннее 2 символов',
      maxLength: 'Имя должно быть короче 30 символов',
      function: 'Недопустимый формат'
    },
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Недопустимый формат'},
  },
  submitHandler: function(form) {

     let formData = new FormData(form);

     let xhr = new XMLHttpRequest();

     xhr.onreadystatechange = function(){
       if (xhr.readyState === 4){
         if (xhr.status === 200){
           console.log('Отправлено');
         }
       }
     }

     xhr.open('POST', 'mail.php', true);
     xhr.send(formData);
     
     form.reset();
  }
});



})