document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('.search__form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    })

})