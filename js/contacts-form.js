window.addEventListener("DOMContentLoaded", function() {
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999 99 99");
  
  im.mask(selector);

  new JustValidate('.contacts__left-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 15,
        function: (name,value) => {
          let array = value.split(['']);
          return (!array.includes(1,2,3))
        }
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      }
    }
  });
})