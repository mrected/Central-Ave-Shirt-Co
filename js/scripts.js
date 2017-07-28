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

	var numberOfShirts = shirtsArray.length;
	var shirtNumber=0;

	var shirtSrcString = "images/catImages/item_" + shirtNumber + ".jpg";

	function preloadImages(){
		let preloaderString = "";
		for(let i=0; i<numberOfShirts;i++){
			preloaderString+="<img aria-hidden='true' src='images/catImages/item_" + i + ".jpg'>";
			console.log(preloaderString);
		}
		$("#preloader").html(preloaderString);
	}
	preloadImages();
	function displayInfo(){
		$("#cvShirtType").html(cvShirtType[shirtNumber]);
		$("#shirtDesc").html(shirtDesc[shirtNumber]);
	}

	function updateLinks(){
		$("#shirtImgLink, #shirtImgBtn").attr("href",shirtLinks[shirtNumber]);
	}

	displayInfo();

	function nextShirt(){
		if(shirtNumber>=numberOfShirts-1){
			shirtNumber = 0;
			shirtSrcString = "images/catImages/item_" + shirtNumber + ".jpg";
		}
		else{
			shirtNumber++;
			shirtSrcString = "images/catImages/item_" + shirtNumber + ".jpg";
		}
		$(".catViewerImg").animate({opacity: 0,left:"+=150px"},200, function(){
			$(".catViewerImg").attr("src", shirtSrcString);
			$(".catViewerImg").animate({left:"-=300px"},1);
			$(".catViewerImg").animate({opacity:1,left:"+=150px"},200);
			displayInfo();
			updateLinks();
		});
		
	}

	function prevShirt(){
		if(shirtNumber<=0){
			shirtNumber = numberOfShirts-1;
			shirtSrcString = "images/catImages/item_" + shirtNumber + ".jpg";

		}
		else{
			shirtNumber--;
			shirtSrcString = "images/catImages/item_" + shirtNumber + ".jpg";
		}
		$(".catViewerImg").animate({opacity: 0,left:"-=150px"},200, function(){
			$(".catViewerImg").attr("src", shirtSrcString);
			$(".catViewerImg").animate({left:"+=300px"},1);
			$(".catViewerImg").animate({opacity:1,left:"-=150px"},200);
			displayInfo();
			updateLinks();
		});

	}

	$("#catViewerPrev, #catViewerNext").hover(function(){
		$(this).css({"color": "#d84727","cursor": "pointer"});
	},
	function(){
		$(this).css("color","#2292a4");
	});

	$("#catViewerPrev").click(function(){
		prevShirt();
	});

	$("#catViewerPrev").hover(function(){
		$("#");
	});

	$("#catViewerNext").click(function(){
		nextShirt();
	});

	$("#testBtn").click(function(){
		$("#testLink").attr("href",shirtLinks[shirtNumber]);
		console.log($("#testLink").attr("href"));
	});


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
		var getRandNum = Math.floor(Math.random()*(bannerArray.length));
			var bannerImage="images/bannerImages/" + bannerArray[getRandNum];
			$("#logoDivMain").css('background-image', 'url('+ bannerImage + ')');
	}

	$(document).ready(function(){
		pickBannerImg();
	});


	function getDesignerBtnLink(){
		var product = "#" + $(".designThisBtn").attr("name");
		sessionStorage.setItem("sendProduct",product);
	}


		//gets product name and transfers to designer page to arrange divs

	$(".designThisBtn").click(function sendProductVar(){
		var product = "#" + $(this).attr("name");
		sessionStorage.setItem("sendProduct",product);
	});


});
//End Randomizer






