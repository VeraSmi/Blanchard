window.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header-bottom__button").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header-bottom__option-container");
    
    document.querySelectorAll(".header-bottom__button").forEach(el => {
      if (el != btn) {
        el.classList.remove("is-active");
      }
    });
    
    document.querySelectorAll(".header-bottom__option-container").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("is-active");
      }
    })
    dropdown.classList.toggle("is-active");
    btn.classList.toggle("is-active")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header-bottom__list")) {
    document.querySelectorAll(".header-bottom__option-container").forEach(el => {
        el.classList.remove("is-active");
    })
     document.querySelectorAll(".header-bottom__button").forEach(el => {
        el.classList.remove("is-active");
    });
  }
})
})

  