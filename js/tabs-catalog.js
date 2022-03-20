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

  tabsActive('.tabs-country__btn', '.catalog-top-content');
  tabsActive('.tabs-artist-btn', '.tabs-artist__content');
})
