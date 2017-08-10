//Utilities
$(document).ready(function(){



	//cancels default action
	$(".xlDefault").click(function(e){
		e.preventDefault();
	});

	//gets width of parent div, sets width of child div
	$(window).resize(function(){
		$(this).width($(".getParentWidth").parent().width());
	});






	//Enable popovers
	$(function () {
	  $('[data-toggle="popover"]').popover();
	});


	

	//Opening and closing navbar
	var navOpenState;

	function openNav(){
		navOpenState = true;
		if(navOpenState===true){
			$("#leftNavSection").stop().animate({left:"-6.125rem"},{duration:200});
			$("#rightNavSection").stop().animate({left:"6.125rem"},{duration:200});
			$("#topNavSection").animate({height: "7.5rem"},{duration:300, complete: function(){
				$("#smallLogo").fadeIn("fast");
			}});
			pickBannerImg();
		}
	}

	function closeNav(){
		navOpenState = false;
		if(navOpenState===false){
			
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
			}
			else if($(window).scrollTop()<350){
				closeNav();
			}
		},50));

	});




	//End Utilities

	


	//banner randomizer

	//make array with image paths or use data file

	var bannerArray = ["Banner-cheetah.jpg",
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


	function pickBannerImg(){
		let getRandNum = Math.floor(Math.random()*(bannerArray.length));
			let currentImg = $("#logoDivMain").css('background-image')
			let bannerImage="images/bannerImages/" + bannerArray[getRandNum];
			$("#logoDivMain").css('background-image', 'url('+ bannerImage + ')');
			// alert(currentImg + " " + bannerImage);
	}

	$(document).ready(function(){
		pickBannerImg();
	});


	function getDesignerBtnLink(){
		var product = "#" + $(".designThisBtn").attr("name");
		sessionStorage.setItem("sendProduct",product);
	}


		//gets product name and transfers to designer page to arrange divs

	// $(".designThisBtn").on("click", function sendProductVar(){
	// 	var product = "#" + $(this).attr("name");
	// 	sessionStorage.setItem("sendProduct",product);
	// });


});
//End Randomizer






