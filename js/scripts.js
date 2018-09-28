// VARIABLES*************************
let currentImg = '';
let bannerImage = '';
let navOpenState = false;


// FUNCTIONS*************************

// Utilities
function backLink() {
  window.history.back();
}

// Rounds currency 
// const roundCurrency = cost => cost = cost.toFixed(2);

function roundCurrency(cost) {
  return cost.toFixed(2);
}


// fixes jumpy scroll over fixed backround in ie11
if (navigator.userAgent.match(/Trident\/7\./)) { // if IE
  $('body').on('mousewheel', () => {
    event.preventDefault(); 

    let wheelDelta = event.wheelDelta;
    let currentScrollPosition = window.pageYOffset;
    window.scrollTo(0, currentScrollPosition - wheelDelta);
  });
}

// enables links in tabs
$(document).ready(() => {
  $('.tabbable .tab-pane a').unbind();
});


// cancels default action
$('.xlDefault').click((e) => {
  e.preventDefault();
});

// Enable tooltips
$(() => {
  $('[data-toggle="tooltip"]').tooltip()
});

// Enable popovers
$(() => {
  $('[data-toggle="popover"]').popover();
});

// sends to designer based on name attr

function sendProductDesign() {
  const product = `#${$(this).attr('name')}`;
  sessionStorage.setItem('sendProductDesign', product);
}

function sendProductPrice() {
  const product = `#${$(this).attr('name')}`;
  sessionStorage.setItem('sendProductPrice', product);
}

$('.designThisBtn').on('click', sendProductDesign);

$('.priceThisBtn').on('click', sendProductPrice);

// End Utilities

// Opening and closing navbar

function pickBannerImg() {
  if (document.getElementById('logoDivMain')) {
    const getRandNum = Math.floor(Math.random() * (bannerArray.length));
    currentImg = $('#logoDivMain').css('background-image');
    bannerImage = `location/bannerImages/${bannerArray[getRandNum]}`;
    bannerDuplicateCheck();
  }
}

function openNav() {
  if (navOpenState === false) {
    pickBannerImg();

    $('#leftNavSection').stop().animate({ left: '-6.125rem' }, { duration: 200 });
    $('#rightNavSection').stop().animate({ left: '6.125rem' }, { duration: 200 });
    $('#topNavSection').animate({ height: '7.5rem' }, { 
      duration: 300,
      complete() {
        $('#smallLogo').fadeIn('fast');
      },
    });
  }
}

function closeNav() {
  if (navOpenState === true) {
    $('#smallLogo, .mobileLogo').stop().fadeOut('fast', () => {
      $('#topNavSection').animate({ height: '5.45rem' }, { duration: 300 });
      $('#leftNavSection').animate({ left: 0 }, { duration: 200 });
      $('#rightNavSection').animate({ left: 0 }, { duration: 200 });
    });
  }
}


$(window).scroll(function () {
  clearTimeout($.data(this, 'scrollTimer'));
  $.data(this, 'scrollTimer', setTimeout(() => {
    if ($(Window).scrollTop() > 500 && $(Window).width() >= 768 ) {
    openNav ();
			navOpenState = true;
		}
		else if($(window).scrollTop()>200 && $(window).width()<768) {
			$(".mobileLogo").fadeIn("fast");
			navOpenState = true;
		}
		else if($(window).scrollTop()<350){
			closeNav();
			navOpenState = false;
		}
	}, 250));
});


function bannerDuplicateCheck() {
  if (currentImg.search(bannerImage) === -1) {
    $('#logoDivMain').css('background-image', `url(${bannerImage})`);
  } else {
    pickBannerImg();
  }
}

function getDesignerBtnLink() {
  const product = `#${$('.designThisBtn').attr('name')}`;
  sessionStorage.setItem('sendProduct', product);
}

// IMAGE Preloader**********************

const preloadDiv = document.getElementById('bannerPreloader');
const preloaderStr = bannerArray.map(image => `<img src="location/bannerImages/${image}" aria-hidden="true" alt="preloadedImg"><br>`).join('');
preloadDiv.innerHTML = preloaderStr;
console.log(typeof preloaderStr);


// EVENTS/CALLS*************************


if (document.getElementById('logoDivMain')) {
  pickBannerImg();
}

$('.dropdown-toggle').dropdown();


// gets product name and transfers to designer page to arrange divs

// $(".designThisBtn").on("click", function sendProductVar(){
// var product = "#" + $(this).attr("name");
// sessionStorage.setItem("sendProduct",product);
// });
