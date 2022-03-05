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

  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;
  console.log(innerWidth);
  if (innerWidth <= 725) {
    document.querySelectorAll('.tabs-artist-btn').forEach(function (click) {
      click.addEventListener('click', function () {
        window.scrollTo(0, innerWidth*7)
      })  
    })
  } else if (innerWidth <= 576) {
    document.querySelectorAll('.tabs-artist-btn').forEach(function (click) {
      click.addEventListener('click', function () {
        window.scrollTo(0, innerWidth*9)
      })  
    })
  } else if (innerWidth <= 400) {
    document.querySelectorAll('.tabs-artist-btn').forEach(function (click) {
      click.addEventListener('click', function () {
        window.scrollTo(0, innerWidth*11)
      })  
    })
  } 

})
