function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }


const navTrigger = document.querySelector('#topImage');
  
// window.scrollY - distance in px top of window has traveled
// window.innerHeight - total height of viewport

const navLogo = document.querySelector('#nav-logo');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');

function navAnimate() {
  if (window.scrollY > navTrigger.offsetHeight) {
    navLeft.classList.add('open');
    navRight.classList.add('open');
    navLogo.classList.add('open');
  }

  else {
    navLeft.classList.remove('open');
    navRight.classList.remove('open');
    navLogo.classList.remove('open');
  }
}

window.addEventListener('scroll', debounce(navAnimate));

// console.log(navTrigger);
//   function checkSlide(e){
//     navTrigger.forEach(sliderImage => {
//       // halfway thru the image
//       const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//       //bottom of the image
//       const imageBottom = sliderImage.offsetTop + sliderImage.height;
//       const isHalfShown = slideInAt > sliderImage.offsetTop;
//       const isNotScrolledPast = window.scrollY < imageBottom;
//       if(isHalfShown && isNotScrolledPast){
//         sliderImage.classList.add('active');
//       }
//       else{
//         sliderImage.classList.remove('active');
//       }
//     })
//   }

//   window.addEventListener('scroll', debounce(checkSlide));

// function open(){
//     const 
// } 
