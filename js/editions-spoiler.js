document.addEventListener('DOMContentLoaded', function() {
  let btn = document.querySelector(".editions__category");
  let formCategory = document.querySelector(".editions__form-category");
  btn.addEventListener("click", function() {
    formCategory.classList.toggle("form-category__active");
    formCategory.classList.add("margin");
    document.querySelectorAll(".editions__label").forEach(el => {
      el.classList.toggle("active");
      let checkbox = el.querySelector(".editions__checkbox");
  
      if (checkbox.checked) {
        el.classList.add("active");
      } 
    })
    document.querySelectorAll(".editions__label").forEach(el => {
      el.addEventListener("click", function() {
        let label = this;
        if (formCategory.classList.contains("form-category__active") && (label.classList.contains('active'))) {
          formCategory.classList.add("margin")
        } else {
          formCategory.classList.remove("margin")
        }
      });
    })
  });

  document.querySelectorAll(".editions__label").forEach(el => {
    el.addEventListener("click", function() {
      let label = this;
      if (!formCategory.classList.contains("form-category__active")) {
        label.classList.remove("active");
      } 
    });
  })

  
  

})