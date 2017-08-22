let numberOfStyles=Object.keys(itemInfo).length;
let itemNumber=0;
let itemSrcString = "images/catImages/item_" + itemNumber + ".jpg";
let itemAdtlCost=0;

function preloadImages(){
	let preloaderString = "";
	for(let i=0; i<numberOfStyles;i++){
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
	$("#infoLink").html(itemInfo[itemNumber].linkAttr_info)
	$(".designThisBtn").on("click", function sendProductVar(){
		let product = "#" + $(this).attr("name");
		sessionStorage.setItem("sendProduct",product);
	});
}

function nextItem(){
	if(itemNumber>=numberOfStyles-1){
		itemNumber = 0;
		itemSrcString = itemInfo[itemNumber].image;
	}
	else{
		itemNumber++;
		itemSrcString = itemInfo[itemNumber].image;
	}
	$(".catViewerImg").animate({opacity: 0,left:"+=150px"},200, function(){
		$(".catViewerImg").attr("src", itemSrcString);
		$(".catViewerImg").animate({left:"-=300px"},1);
		$(".catViewerImg").animate({opacity:1,left:"+=150px"},200);
		displayName();
		updateLinks();
	});

}

function prevItem(){
	if(itemNumber<=0){
		itemNumber = numberOfStyles-1;
		itemSrcString = itemInfo[itemNumber].image;

	}
	else{
		itemNumber--;
		itemSrcString = itemInfo[itemNumber].image;
	}
	$(".catViewerImg").animate({opacity: 0,left:"-=150px"},200, function(){
		$(".catViewerImg").attr("src", itemSrcString);
		$(".catViewerImg").animate({left:"+=300px"},1);
		$(".catViewerImg").animate({opacity:1,left:"-=150px"},200);
		itemAdtlCost = itemInfo[itemNumber].adtnlChrg;
		displayName();
		updateLinks();
	});

}

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