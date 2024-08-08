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

let prefix = ["https://checkout.pepper.com.br"];
     
function getParams() {
    let t = "",
        e = window.top.location.href,
        r = new URL(e);
    if (null != r) {
        let a = r.searchParams.get("utm_source"),
            n = r.searchParams.get("utm_medium"),
            o = r.searchParams.get("utm_campaign"),
            m = r.searchParams.get("utm_term"),
            c = r.searchParams.get("utm_content"); - 1 !== e.indexOf("?") && (t = `&sck=${a}|${n}|${o}|${m}|${c}`), console.log(t)
    }
    return t
}! function() {
    var t = new URLSearchParams(window.location.search);
    t.toString() && document.querySelectorAll("a").forEach(function(e) {
        for (let r = 0; r < prefix.length; r++) - 1 !== e.href.indexOf(prefix[r]) && (-1 === e.href.indexOf("?") ? e.href += "?" + t.toString() + getParams() : e.href += "&" + t.toString() + getParams())
    })
}();
console.log('%cScript de rastreamento de vendas desenvolvido pela Comunidade NOD - Dericson Calari e Samuel Choairy', 'font-size:20px;color:yellow;');


function getParams() {
    let t = "",
        e = window.top.location.href,
        r = new URL(e);
    if (null != r) {
        let a = r.searchParams.get("utm_source"),
            n = r.searchParams.get("utm_medium"),
            o = r.searchParams.get("utm_campaign"),
            m = r.searchParams.get("utm_term"),
            p = r.searchParams.get("fbclid"),
            c = r.searchParams.get("utm_content");
        -1 !== e.indexOf("?") && (t = `&src=${a}|${n}|${o}|${m}|${c}`);
        console.log(t);
    }
    return t;
}

function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
    return null;
}

function updateLinks() {
    var t = new URLSearchParams(window.location.search);
    var sck = getCookie("Leadsf");

    if (sck) {
        t.append("sck", sck);

        t.toString() && document.querySelectorAll("a").forEach(function(e) {
            for (let r = 0; r < prefix.length; r++) {
                if (-1 !== e.href.indexOf(prefix[r])) {
                    if (-1 === e.href.indexOf("?")) {
                        e.href += "?" + t.toString() + getParams();
                    } else {
                        e.href += "&" + t.toString() + getParams();
                    }
                }
            }
        });
    } else {
        // Tenta novamente após 100ms se o cookie ainda não estiver presente
        setTimeout(updateLinks, 100);
    }
}

window.addEventListener('load', function() {
    updateLinks();
});