// Defina a duração da contagem regressiva em segundos (por exemplo, 1 hora = 3600 segundos)
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

function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    const hoursElem = document.getElementById('hours');
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');

    setInterval(() => {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = Math.floor(timer % 60);

        hoursElem.textContent = hours < 10 ? "0" + hours : hours;
        minutesElem.textContent = minutes < 10 ? "0" + minutes : minutes;
        secondsElem.textContent = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

