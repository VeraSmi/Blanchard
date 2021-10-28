document.addEventListener('DOMContentLoaded', function () {
  const selector = document.querySelector('.gallery__select');
  const choices1 = new Choices(selector, {
    searchEnabled: false,
    searchChoices: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices choices1',
     },
  });

  document.querySelector('.choices1').classList.add('is-open');
  document.querySelector('.choices1').classList.add('is-focused');
  
  const choices2 = new Choices(document.querySelector("#style-320") , {
    searchEnabled: false,
    searchChoices: false,
    itemSelectText: '',
     classNames: {
      containerOuter: 'choices choices2',
     },
  });
});