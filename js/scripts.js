
var numberOfShirts = shirtsArray.length;
var shirtNumber=0;

var shirtSrcString = "images/catImages/item_" + shirtNumber + ".svg";

function displayInfo(){
	$("#shirtType").html(shirtType[shirtNumber]);
	$("#shirtDesc").html(shirtDesc[shirtNumber]);
}

function updateLinks(){
	$("#shirtImgLink, #shirtImgBtn").attr("href",shirtLinks[shirtNumber]);
}

displayInfo();

function nextShirt(){
	if(shirtNumber>=numberOfShirts-1){
		shirtNumber = 0;
		shirtSrcString = "images/catImages/item_" + shirtNumber + ".svg";
	}
	else{
		shirtNumber++;
		shirtSrcString = "images/catImages/item_" + shirtNumber + ".svg";
	}
	$(".catViewerImg").animate({opacity: 0,left:"-=150px"},200, function(){
		$(".catViewerImg").attr("src", shirtSrcString);
		$(".catViewerImg").animate({left:"+=300px"},1);
		$(".catViewerImg").animate({opacity:1,left:"-=150px"},200);
		displayInfo();
		updateLinks();
	});
}

function prevShirt(){
	if(shirtNumber<=0){
		shirtNumber = numberOfShirts-1;
		shirtSrcString = "images/catImages/item_" + shirtNumber + ".svg";

	}
	else{
		shirtNumber--;
		shirtSrcString = "images/catImages/item_" + shirtNumber + ".svg";
	}
	$(".catViewerImg").animate({opacity: 0,left:"+=150px"},200, function(){
		$(".catViewerImg").attr("src", shirtSrcString);
		$(".catViewerImg").animate({left:"-=300px"},1);
		$(".catViewerImg").animate({opacity:1,left:"+=150px"},200);
		displayInfo();
		updateLinks()
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
	$("#")
});

$("#catViewerNext").click(function(){
	nextShirt();
});

$("#testBtn").click(function(){
	$("#testLink").attr("href",shirtLinks[shirtNumber]);
	console.log($("#testLink").attr("href"));
});
