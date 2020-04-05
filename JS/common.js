


  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    slidesPerView: 5,
    effect: 'slide',

    breakpoints: {
      // when window width is <= 320px
      470: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 320px
      650: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is <= 320px
      850: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      // when window width is <= 480px
      1100: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      // when window width is <= 640px
      1200: {
        slidesPerView: 5,
        spaceBetween: 10
      }
    },

    autoplay: {
      delay: 2000,
    },

    // If we need pagination
    pagination: {
      el: 'null',
      
    },

    // Navigation arrows
    navigation: {
      
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  })
  

  $('.menu_btn').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('menu_btn_active');
  });