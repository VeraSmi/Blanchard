window.addEventListener("DOMContentLoaded", function() {
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999 99 99");
  
  im.mask(selector);

  const form = document.querySelector('.contacts__left-form');

  form.addEventListener('submit', formSend);


  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
  }


  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('.contacts__left-form-input')

    for(let i = 0; i < formReq.length; i++){
      const input = formReq[i];
      formRemoveError(input);

      if(input.classList.contains('name')) {
        if (nameTest(input)) {
          formAddError(input);
          error++;
        } else if ( phoneTest(input) ) {
            formAddError(input);
            error++;
          } else if(input.value === '') {
              formAddError(input);
              error++;
            }
      }
    }
    
  }


  function formAddError(input) {
    input.parentElement.classList.add('error');
    input.classList.add('error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
  }

  function nameTest(input) {
    // return ![a-zA-Zа-яА-Я].test(input.value);
    return false;
  }

  function phoneTest(input) {
    const phone = selector.inputmask.unmaskedvalue();
    return !(Number(phone) && phone.length === 10);
  }




  


})