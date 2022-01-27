document.addEventListener('DOMContentLoaded', function() {
  // var modal = new tingle.modal({
  // footer: true,
  // stickyFooter: false,
  // closeMethods: ['overlay', 'button', 'escape'],
  // closeLabel: "Close",
  // cssClass: ['custom-class-1', 'custom-class-2'],
  // });

  // animation(modal, "modal-active", "play");

    $('a.open-modal').click(function(event) {
      $(elm).modal({
        fadeDuration: 250,
        fadeDelay: 2
      });
      return false;
    });


  $.modal.close( function(){
    console.log('js - cool')
  });

 

function animation(el, flag) {
  if (flag === "play") {
    el.style.display = "flex";
    setTimeout(function() {
      el.classList.add(Class);
    }, 50)
  } else if (flag === "reverse") {
    el.classList.remove(Class);
    setTimeout(function() {
      el.style.display = "none";
    }, 700)
  }
}

})