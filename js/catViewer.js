let itemNumber=0;
const numberOfItems = Object.keys(itemInfo).length;
let shirtSrcString = "images/catImages/item_" + itemNumber + ".jpg";

	function preloadImages(){
		let preloaderString = "";
		for(let i=0; i<numberOfItems;i++){
			preloaderString+="<img aria-hidden='true' src='images/catImages/item_" + i + ".jpg'>";
		}
		$("#preloader").html(preloaderString);
	}
	preloadImages();
	function displayInfo(){
		$("#cvShirtType").html(itemInfo[itemNumber].name);
		$("#shirtDescTxt").html(shirtDesc[itemNumber]);
	}

	function updateLinks(){
		$("#shirtImgLink, #shirtImgBtn").attr("href",shirtLinks[itemNumber]);
		$(".designThisBtn").on("click", function sendProductVar(){
			let product = "#" + $(this).attr("name");
			sessionStorage.setItem("sendProduct",product);
		});
	}

	displayInfo();

	function nextShirt(){
		if(itemNumber>=numberOfItems-1){
			itemNumber = 0;
			shirtSrcString = "images/catImages/item_" + itemNumber + ".jpg";
		}
		else{
			itemNumber++;
			shirtSrcString = "images/catImages/item_" + itemNumber + ".jpg";
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
		if(itemNumber<=0){
			itemNumber = numberOfItems-1;
			shirtSrcString = "images/catImages/item_" + itemNumber + ".jpg";

		}
		else{
			itemNumber--;
			shirtSrcString = "images/catImages/item_" + itemNumber + ".jpg";
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
	},function(){
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







		//gets product name and transfers to designer page to arrange divs

	// $(".designThisBtn").click(function sendProductVar(){
	// 	var product = "#" + $(this).attr("name");
	// 	alert(product);
	// 	sessionStorage.setItem("sendProduct",product);
	// });
