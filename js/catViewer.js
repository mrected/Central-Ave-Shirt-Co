var numberOfShirts = Object.keys(itemInfo).length;
	var shirtNumber=0;

	var shirtSrcString = "images/catImages/item_" + shirtNumber + ".jpg";

	function preloadImages(){
		let preloaderString = "";
		for(let i=0; i<numberOfShirts;i++){
			preloaderString+="<img aria-hidden='true' src='images/catImages/item_" + i + ".jpg'>";
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
		$(".designThisBtn").on("click", function sendProductVar(){
			var product = "#" + $(this).attr("name");
			sessionStorage.setItem("sendProduct",product);
		});
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





		//gets product name and transfers to designer page to arrange divs

	// $(".designThisBtn").click(function sendProductVar(){
	// 	var product = "#" + $(this).attr("name");
	// 	alert(product);
	// 	sessionStorage.setItem("sendProduct",product);
	// });
