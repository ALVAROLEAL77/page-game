
const countdownDuration = 1800; // 1 hora
startCountdown(countdownDuration);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
     
        0: {
            slidesPerView: 1,
        },
     
        600: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
    },
  });

  function loading(){
    document.getElementsByClassName('box-load')[0].style.display = "none";
    document.getElementsByClassName('content')[0].style.display = "block";
  }
