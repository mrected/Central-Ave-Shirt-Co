//VARIABLES*************************

let navOpenState = false;
const bannerArray = ["Banner-cheetah.jpg",
						"Banner-dogWalker.jpg",
						"Banner-downCentral.jpg",
						"Banner-estInStPete.jpg",
						"Banner-Fergs.jpg",
						"Banner-Jannus.jpg",
						"Banner-localArt.jpg",
						"Banner-Monk.jpg",
						"Banner-piano.jpg",
						"Banner-Sidewalk.jpg",
						"Banner-sidewalk2.jpg",
						"Banner-streetColors.jpg",
						"Banner-Trolley.jpg"
						];



//FUNCTIONS*************************

//Utilities
function backLink(){
	window.history.back();
}

//Rounds currency 
// const roundCurrency = cost => cost = cost.toFixed(2);

function roundCurrency(cost){
	return cost.toFixed(2);
}



//fixes jumpy scroll over fixed backround in ie11
if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function () {
            event.preventDefault(); 

            let wheelDelta = event.wheelDelta;
            let currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
}

//enables links in tabs
$(document).ready(function(){
	$('.tabbable .tab-pane a').unbind();
});
	


//cancels default action
$(".xlDefault").click(function(e){
	e.preventDefault();
});

//Enable tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//Enable popovers
$(function () {
  $('[data-toggle="popover"]').popover();
});

//sends to designer based on name attr

function sendProductDesign(){
	let product = "#" + $(this).attr("name");
	sessionStorage.setItem("sendProductDesign",product);
}

function sendProductPrice(){
	let product = "#" + $(this).attr("name");
	sessionStorage.setItem("sendProductPrice",product);
}

$(".designThisBtn").on("click", sendProductDesign);

$(".priceThisBtn").on("click", sendProductPrice);

//End Utilities

//Opening and closing navbar

function openNav(){
	if(navOpenState===false){
		$("#leftNavSection").stop().animate({left:"-6.125rem"},{duration:200});
		$("#rightNavSection").stop().animate({left:"6.125rem"},{duration:200});
		$("#topNavSection").animate({height: "7.5rem"},{duration:300, complete: function(){
			$("#smallLogo").fadeIn("fast");
			pickBannerImg();
			}
		});
	}
}

function closeNav(){
	if(navOpenState===true){
		$("#smallLogo").stop().fadeOut("fast", function(){
			$("#topNavSection").animate({height: "5.45rem"},{duration:300});
			$("#leftNavSection").animate({left:0},{duration:200});
			$("#rightNavSection").animate({left:0},{duration:200});
		});
	}
}


$(window).scroll(function(){
	clearTimeout($.data(this, 'scrollTimer'));
	$.data(this, 'scrollTimer', setTimeout(function(){
		if($(window).scrollTop()>500){
			openNav();
			navOpenState = true;
		}
		else if($(window).scrollTop()<350){
			closeNav();
			navOpenState = false;
		}
	},250));
});



function pickBannerImg(){
	let getRandNum = Math.floor(Math.random()*(bannerArray.length));
		let currentImg = $("#logoDivMain").css('background-image')
		let bannerImage="images/bannerImages/" + bannerArray[getRandNum];
		$("#logoDivMain").css('background-image', 'url('+ bannerImage + ')');
		// alert(currentImg + " " + bannerImage);
}

function getDesignerBtnLink(){
	let product = "#" + $(".designThisBtn").attr("name");
	sessionStorage.setItem("sendProduct",product);
}

//EVENTS/CALLS*************************

pickBannerImg();

	

	
	
	





	



	


	


		



	


		//gets product name and transfers to designer page to arrange divs

	// $(".designThisBtn").on("click", function sendProductVar(){
	// 	var product = "#" + $(this).attr("name");
	// 	sessionStorage.setItem("sendProduct",product);
	// });










