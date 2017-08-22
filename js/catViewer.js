//VARIABLES*************************

let itemNumber=0;
const numberOfItems = Object.keys(itemInfo).length;
let itemSrcString = "images/catImages/item_" + itemNumber + ".jpg";

//FUNCTIONS*************************

	function preloadImages(){
		let preloaderString = "";
		for(let i=0; i<numberOfItems;i++){
			preloaderString+="<img aria-hidden='true' src='images/catImages/item_" + i + ".jpg'>";
		}
		$("#preloader").html(preloaderString);
	}

	function displayInfo(){
		$("#itemType").html(itemInfo[itemNumber].name);
		$("#itemDescTxt").html(shirtDesc[itemNumber]);
		$("#startCostTxt").html("$" + roundCurrency(itemCostData.c1[13] + itemInfo[itemNumber].adtnlChrg));
	}

	function updateLinks(){
		$("#designLink").attr('name',itemInfo[itemNumber].linkAttr_design);
		$("#infoLink").attr('href',itemInfo[itemNumber].linkAttr_info);
		$(".designThisBtn").on("click", sendProductVar);
	}

	function nextItem(){
		if(itemNumber>=numberOfItems-1){
			itemNumber = 0;
			itemSrcString = "images/catImages/item_" + itemNumber + ".jpg";
		}
		else{
			itemNumber++;
			itemSrcString = "images/catImages/item_" + itemNumber + ".jpg";
		}
		$(".catViewerImg").animate({opacity: 0,left:"+=150px"},200, function(){
			$(".catViewerImg").attr("src", itemSrcString);
			$(".catViewerImg").animate({left:"-=300px"},1);
			$(".catViewerImg").animate({opacity:1,left:"+=150px"},200);
			displayInfo();
			updateLinks();
		});
		
	}

	function prevItem(){
		if(itemNumber<=0){
			itemNumber = numberOfItems-1;
			itemSrcString = "images/catImages/item_" + itemNumber + ".jpg";

		}
		else{
			itemNumber--;
			itemSrcString = "images/catImages/item_" + itemNumber + ".jpg";
		}
		$(".catViewerImg").animate({opacity: 0,left:"-=150px"},200, function(){
			$(".catViewerImg").attr("src", itemSrcString);
			$(".catViewerImg").animate({left:"+=300px"},1);
			$(".catViewerImg").animate({opacity:1,left:"-=150px"},200);
			displayInfo();
			updateLinks();
		});

	}
//EVENTS/CALLS*************************
	preloadImages();
	displayInfo();
	updateLinks();

	$("#catViewerPrev, #catViewerNext").hover(function(){
		$(this).css({"color": "#d84727","cursor": "pointer"});
	},function(){
		$(this).css("color","#2292a4");
	});
	

	$("#catViewerPrev").click(function(){
		prevItem();
	});

	$("#catViewerPrev").hover(function(){
		$("#");
	});

	$("#catViewerNext").click(function(){
		nextItem();
	});







		//gets product name and transfers to designer page to arrange divs

	// $(".designThisBtn").click(function sendProductVar(){
	// 	var product = "#" + $(this).attr("name");
	// 	alert(product);
	// 	sessionStorage.setItem("sendProduct",product);
	// });
