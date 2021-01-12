/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    rtl: true,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}





/* Otherwise just put the config content (json): */

particlesJS('snow_fall',

    {
        "particles": {
            "number": {
                "value": 1000,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom-left",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);


$('img').mousedown(function (e) {
    if (e.button == 2) { // right click
        return false; // do nothing!
    }
});


if (screen.width < 768) {
    document.querySelector("#snow_fall").remove()
    document.querySelector(".particlejs").remove()
    document.querySelector(".slider-sidebar1").remove()
    document.querySelector(".slider-sidebar2").remove()
}

function enableBuying() {
    document.querySelector(".pop-up-content").innerHTML = 
    `
    <div class="paypal-container">
        <div class="remove-icon">
            <i class="fa fa-remove remove exitBuy" onClick="remove()"></i>
        </div>
        <div class="col-md-10 col-lg-8 buy-popup">
            <div class="section-title extra">
                <h2 class="title center-block text-center">
                    Buy Now
                </h2>
            </div>
            <!--
            <a class="cardBuy" target="_blank" href="https://donorbox.org/anticheat">
                <button class="white-text call-to-action buy-now-btn btn btn-primary paypal-btn cardBuyBtn"
                    type="button" href="https://donorbox.org/anticheat">
                    <i class="fas fa-credit-card"></i>
                    Buy with Credit/Debit Card&nbsp;&nbsp;
                    <span class="badge bg-warning text-dark fee">35% fee</span>
                </button>
            </a>
            <a class="paypalbuy" target="_blank" href="https://donorbox.org/anticheat">
                <button type="button" target="_blank" href="https://donorbox.org/anticheat"
                    class="white-text call-to-action buy-now-btn btn btn-primary paypal-btn paypalBuyBtn">
                    <i class="fab fa-paypal" aria-hidden="true"></i>
                    Buy with PayPal&nbsp;&nbsp;
                    <span class="badge bg-warning fee">35% fee</span>
                </button>
            </a>
            -->
            <a href="https://commerce.coinbase.com/checkout/0dd2b119-8482-4030-8443-daa1050fa5d7"
                target="_blank">
                <button type="button"
                    href="https://commerce.coinbase.com/checkout/0dd2b119-8482-4030-8443-daa1050fa5d7"
                    target="_blank"
                    class="white-text call-to-action buy-now-btn btn btn-primary crypto-btn cryptoBuyBtn">
                    <i class="fab fa-btc"></i>
                    Buy with Crypto&nbsp;&nbsp;
                    <span class="badge bg-success fee">3.33% fee</span>
                </button>
            </a>
            <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
            <br>
            <br>
            <br>
            <h6 class="aware">You have agreed to the <a href="https://anticheat.gg/policy.pdf" target="_blank"><strong>Terms of Purchase</strong></a>. Continuing with purchase, further afirms said agreement.</h6>
        </div>
    </div>
    `
}

document.querySelector(".buy-btn").addEventListener('click', async function () {
    document.querySelector(".pop-up").style.display = "flex";
    var i = 14; //  set your counter to 1

    function myLoop() {
        setTimeout(function () {
            document.querySelector(".timer").innerHTML = i;
            if (i == 0) {
                document.querySelector(".countdown").innerHTML =
                    `<button onclick="enableBuying()" class="policy-btn" >Agree</button>`;
            }
            i--;
            if (i >= 0) {
                myLoop();
            }
        }, 1000)
    }

    myLoop();
})
document.querySelector(".remove").addEventListener('click', function () {
    document.querySelector(".pop-up").style.display = "none";
})

function remove() {
    document.querySelector(".pop-up").style.display = "none";
}