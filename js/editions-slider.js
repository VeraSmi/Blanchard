document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.editions__swiper');

  let mySwiper;

	function desktopSlider() {
		if ((window.innerWidth > 725) && (slider.dataset.mobile == '0')) {
			mySwiper = new Swiper(slider, {
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-editions-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-editions-button-next",
          prevEl: ".swiper-editions-button-prev"
        },
        breakpoints: {
          726: {
            slidesPerView: 2,
            spaceBetween: 80
          },
          911: {
            slidesPerView: 2,
            spaceBetween: 34
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 50
          },
        },
        a11y: {
          prevSlideMessage: 'Предыдущий',
          nextSlideMessage: 'Следующий',
        }
			});

			slider.dataset.mobile = '1';
		}

		if (window.innerWidth <= 725 && slider.dataset.mobile == '1') {
			slider.dataset.mobile = '0';
			if (slider.classList.contains('swiper-container-initialized')) {
				mySwiper.destroy();
			}
		}
}

	desktopSlider();

	// window.addEventListener('resize', () => {
	// 	desktopSlider();
	// });


  const one = document.querySelector('#krichevskiy');
  const two = document.querySelector('#net');
  const three = document.querySelector('#muller');
  const four = document.querySelector('#graph');
  const five = document.querySelector('#visual');

  if(window.matchMedia('(max-width: 725px)').matches){
      one.textContent = "Кричевский, Влади...";
      two.textContent = "Модульные сетки...";
      three.textContent = "Мюллер-Брокманн...";
      four.textContent = "Эволюция графич...";
      five.textContent = "Искусство и визуа...";
      console.log ( '<726')
  } 

})