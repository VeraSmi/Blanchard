document.addEventListener('DOMContentLoaded', function() {
  function tabsActive(tabsPath, tabsTarget) {
    document.querySelectorAll(tabsPath).forEach(function (countryClick) {
      countryClick.addEventListener('click', function(event) {
        let path = event.currentTarget.dataset.path;
  
        document.querySelectorAll(tabsTarget).forEach(function(countryContent) {
          countryContent.classList.remove('active')
        })
  
        document.querySelectorAll(tabsPath).forEach(function(countryContent) {
          countryContent.classList.remove('active')
        })
  
        document.querySelector(`[data-target="${path}"]`).classList.add('active');
  
        this.classList.add('active');
      })
     })
  }

  tabsActive('.tabs-country__btn', '.tabs-country__content');
  tabsActive('.tabs-artist__btn', '.tabs-artist__content');

  document.querySelectorAll('.tabs-artist__btn').forEach(function (click){
    click.addEventListener('click', function () {
      window.scrollTo(0, 3500)
    })  
  })


})
