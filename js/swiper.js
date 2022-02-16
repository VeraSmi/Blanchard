document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-background', {
    loop: true,
    setWrapperSize: true,
    autoplay: {
      delay: 7000,
    },
    speed: 4000,
  });

  const gallerySwiper = new Swiper(".gallery__swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    keyboard: {
      enabled: true,
    },
    grid: {
      rows: 2
    },
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination-gallery",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        spaceBetween: 0
      },
      726: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 2,

        grid: {
          rows: 2
        },
        spaceBetween: 34
      },
      1200: {
        slidesPerView: 3,

        grid: {
          rows: 2
        },
        spaceBetween: 50
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
    }

  });

  const projectsSwiper = new Swiper('.projects__swiper', {
    navigation: {
      nextEl: ".swiper-projects-button-next",
      prevEl: ".swiper-projects-button-prev"
    },
    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 38
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 45
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 38
      }
    },

  });

});


