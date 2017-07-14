//Utilities

$(".xlDefault").click(function(e){
	e.preventDefault();
});

//gets width of parent div, sets width of child div
$(window).resize(function(){
	$(this).width($(".getParentWidth").parent().width());
});

//End Utilities

$(function () {
  $('[data-toggle="popover"]').popover()
});



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

$(document).ready(function(){
	var getRandNum = Math.floor(Math.random()*(bannerArray.length));
	var bannerImage="images/bannerImages/" + bannerArray[getRandNum];
	$("#logoDiv").css('background-image', 'url('+ bannerImage + ')');
});

//End Randomizer






