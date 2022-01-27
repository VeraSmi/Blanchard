document.addEventListener('DOMContentLoaded', function() {
  let btn = document.querySelector('.events__btn');
  let allItems = document.querySelectorAll('.events__item');
  const slider = document.querySelector('.events__swiper');
  btn.addEventListener('click', function() {
    allItems.forEach( function(item) {
      item.style.display = "flex";
    })

    this.style.display = "none";
  })  

  let mySwiper;

	function mobileSlider() {
		if ((window.innerWidth <= 725) && (slider.dataset.mobile == 'false')) {
			mySwiper = new Swiper(slider, {
				slidesPerView: 1,
				spaceBetween: 10,
    		loop: true,
				slideClass: 'events__item',
				pagination: {
					el: '.events__swiper-pagination',
					clickable: true,
				},
			});

			slider.dataset.mobile = 'true';
		}

		if (window.innerWidth > 725 && slider.dataset.mobile == 'true') {
			slider.dataset.mobile = 'false';
			if (slider.classList.contains('swiper-container-initialized')) {
				mySwiper.destroy();
			}
		}
}

	mobileSlider();

	window.addEventListener('resize', () => {
		mobileSlider();
	});

})