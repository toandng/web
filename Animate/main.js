// scroll
let sections  = document.querySelectorAll('.menu-3');
    window.onscroll  = () => {
        sections.forEach(sec => {
            let top = window.onscrollY;
            let offset = window.onsetTop;
            let height = sec.offsetHeight
            if(top >= offset && top < offset + height ) {
                sec.classList.add('show-animate');
            }
            else {
                sec.classList.remove('.show-animate');
            }
        })
    }

$(document).ready(function () {
    $('.x-down').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
        prevArrow:`
        <button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    
        nextArrow:
        `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></i></button>`,

        dots:true,
      });
  });



//   chạy số

const runSum = document.querySelector('.c-sum');
let sum = 1; 
const endValue = 1.846; 
const speed = 0.01; 
const interval = 10; 

function updateNumber() {
    if (sum < endValue) {
        sum += speed; 
        runSum.textContent = sum.toFixed(3);
        setTimeout(updateNumber, interval); 
    }
}

updateNumber();


const runSum1 = document.querySelector('.c-sum1');
let sum1 = 1; 
const endValue2 = 13.580; 
const speed1 = 0.1;
const interval1 = 10; 

function updateNumber1() {
    if (sum1 < endValue2) {
        sum1 += speed1; 
        runSum1.textContent = sum1.toFixed(3); 
        setTimeout(updateNumber1, interval1); 
    }
}

updateNumber1();

const runSum2 = document.querySelector('.c-sum2');
let sum2 = 1; 
const endValue3 = 34.590; 
const speed2 = 0.1;
const interval2 = 10; 

function updateNumber2() {
    if (sum2 < endValue3) {
        sum2 += speed2; 
        runSum2.textContent = sum2.toFixed(3); 
        setTimeout(updateNumber2, interval2); 
    }
}

updateNumber2();

// slide-2
$('.single-item').slick();
$(document).ready(function(){
    $('.v').slick({
        prevArrow:`
        <button type='button' class='slick-prev-1 pull-left'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    
        nextArrow:
        `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></i></button>`,

        dots:true,
    });
  });