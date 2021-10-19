window.addEventListener('DOMContentLoaded' , function() {
   document.querySelector('.search__button').addEventListener('click', function() {
        document.querySelector('#search__form_top').classList.toggle('is-open');
        document.querySelector('.header-top__search').classList.toggle('is-open');
   })
})

 // var context = document.querySelector(".body"); // requires an element with class "context" to exist
    // var instance = new Mark(context);
    // var position;

    // document.querySelector('.search__button_bot').addEventListener('click', function () {
    //     keyword = document.querySelector('#search__input_bot').value;
    //     console.log(keyword);
    //     instance.mark(keyword); 
    // })

    // document.querySelector('#search__form_bot').addEventListener('submit' , function() {
    //     keyword = document.querySelector('#search__input_bot').value;
    //     console.log(keyword);
    //     instance.mark(keyword);
    // })

    // $( "#search__form_bot" ).submit(function(event) {
    //     event.preventDefault();
    //   });
    
    // document.querySelector('#search__input_bot').addEventListener('input' , function() {
    //     instance.unmark(); 
    // })
