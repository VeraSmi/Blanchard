document.addEventListener('DOMContentLoaded', function () {
  const selector = document.querySelector('.gallery__select');

  // if(window.matchMedia('(max-width: 725px)').matches){
  //     selector.options[0].textContent = "Автор";
  //     selector.options[1].textContent = "Направление";
  //     selector.options[2].textContent = "Техника";
  //     console.log ( '<726')
  // } 
  const choices1 = new Choices(selector, {
    searchEnabled: false,
    searchChoices: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices choices1',
     },
  });
  // console.log ( '>726')
});