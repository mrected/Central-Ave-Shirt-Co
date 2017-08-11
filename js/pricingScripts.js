//data
//ADDING SHIRTS:  
//add a case to shirtType
//add an else if statement to createPriceTable
//add an option to shirtprices.html

// let numberOfColors;
// let numberOfItems=0;
// let shirtCost;
// let totalShirtCost;
// let shirtType="ss";
// let addCost = 0;

//VARIABLES*************************
let numberOfColors;
let numberOfItems;
let itemNumGroup=0;
let itemNumber=0;
let numberOfStyles=Object.keys(itemInfo).length;
let itemTotal;
let totalItemCost;
let itemType="";
let addCost = 0;
let itemAdtlCost=0;
let itemProdCost=0;


//FUNCTIONS*************************


const roundCurrency = cost => cost = cost.toFixed(2);


//start getNumberOfItems()
function getNumberOfItems(){
	numberOfItems = $("#numItemsOpts").val();

	if(numberOfItems >10000 || numberOfItems<1){
		$("#itemTotal").removeClass("bg-success");
		$("#total").removeClass("bg-success");
		$("#info").addClass("warningBox");
		$("#info").html("Please enter a number between 0 &amp; 10000");
		$("#total").html("");
		$("#itemTotal").html("");
		numberOfItems = 0;
		itemNumGroup = 0;
	}
	else if(numberOfItems % 1 !== 0){
		$("#itemTotal").removeClass("bg-success");
		$("#total").removeClass("bg-success");
		$("#info").addClass("warningBox");
		$("#info").html("We can't sell a percentage of a shirt");
		$("#total").html("");
		$("#itemTotal").html("");
		numberOfItems = 0;
		itemNumGroup = 0;
	}
	else{
		$("#info").removeClass("warningBox");
		$("#info").html("");
		$("#itemTotal").addClass("bg-success");
		$("#total").addClass("bg-success");
		if(numberOfItems<=5){
			itemNumGroup= 0;
		}
		else if(numberOfItems<=10){
			itemNumGroup= 1;
		}
		else if(numberOfItems<=15){
			itemNumGroup= 2;
		}
		else if(numberOfItems<=20){
			itemNumGroup= 3;
		}
		else if(numberOfItems<=40){
			itemNumGroup= 4;
		}
		else if(numberOfItems<=60){
			itemNumGroup= 5;
		}
		else if(numberOfItems<=80){
			itemNumGroup= 6;
		}
		else if(numberOfItems<=100){
			itemNumGroup= 7;
		}
		else if(numberOfItems<=140){
			itemNumGroup= 8;
		}
		else if(numberOfItems<=200){
			itemNumGroup= 9;
		}
		else if(numberOfItems<=300){
			itemNumGroup= 10;
		}
		else if(numberOfItems<=400){
			itemNumGroup= 11;
		}
		else if(numberOfItems<=500){
			itemNumGroup= 12;
		}
		else{
			itemNumGroup= 13;
		}
		
		setTotals();
	}

}
//end getNumberOfItems()

//start setTotals()
function setTotals(){
	getItemProdCost();
	itemAdtlCost = itemInfo[itemNumber].adtnlChrg;
	itemTotal=(roundCurrency(itemCostData.c1[itemNumGroup]+itemAdtlCost+itemProdCost));
	
	$("#itemTotal").addClass("bg-success").html(itemTotal);
	$("#total").addClass("bg-success");
	$("#total").html("$" + roundCurrency((itemCostData.c1[itemNumGroup]+itemAdtlCost+itemProdCost) * $("#numItemsOpts").val()));
}
//end setTotals()

//start getItemProdCost()
function getItemProdCost(){
	let $methods = $("#prodMethodOpts").val();
	if($methods === "scr"){
		itemProdCost = 0;
	}
	else if($methods === "dtg"){
		itemProdCost = 4.5;
	}
	else{
		itemProdCost = 2.5;
	}
}
//end getItemProdCost()


//EVENTS/CALLS*************************

$(".styleBtn").click(function(){
	itemType = $("#cvShirtType").text();
});

getNumberOfItems();










//start catviewer


	

	var shirtSrcString = "images/catImages/item_" + itemNumber + ".jpg";

	function preloadImages(){
		let preloaderString = "";
		for(let i=0; i<numberOfStyles;i++){
			preloaderString+="<img aria-hidden='true' src='images/catImages/item_" + i + ".jpg'>";
		}
		$("#preloader").html(preloaderString);
	}
	preloadImages();
	function displayInfo(){
		$("#cvShirtType").html(itemInfo[itemNumber].name);
		$("#shirtDesc").html(shirtDesc[itemNumber]);
	}

	function updateLinks(){
		$("#designLink").attr('name',itemInfo[itemNumber].linkAttr_design);
		$("#infoLink").html(itemInfo[itemNumber].linkAttr_info)
		$(".designThisBtn").on("click", function sendProductVar(){
			var product = "#" + $(this).attr("name");
			sessionStorage.setItem("sendProduct",product);
		});
	}

	displayInfo();

	function nextShirt(){
		if(itemNumber>=numberOfStyles-1){
			itemNumber = 0;
			shirtSrcString = itemInfo[itemNumber].image;
		}
		else{
			itemNumber++;
			shirtSrcString = itemInfo[itemNumber].image;
		}
		$(".catViewerImg").animate({opacity: 0,left:"+=150px"},200, function(){
			$(".catViewerImg").attr("src", shirtSrcString);
			$(".catViewerImg").animate({left:"-=300px"},1);
			$(".catViewerImg").animate({opacity:1,left:"+=150px"},200);
			setTotals();
			displayInfo();
			updateLinks();
		});

	}

	function prevShirt(){
		if(itemNumber<=0){
			itemNumber = numberOfStyles-1;
			shirtSrcString = itemInfo[itemNumber].image;

		}
		else{
			itemNumber--;
			shirtSrcString = itemInfo[itemNumber].image;
		}
		$(".catViewerImg").animate({opacity: 0,left:"-=150px"},200, function(){
			$(".catViewerImg").attr("src", shirtSrcString);
			$(".catViewerImg").animate({left:"+=300px"},1);
			$(".catViewerImg").animate({opacity:1,left:"-=150px"},200);
			itemAdtlCost = itemInfo[itemNumber].adtnlChrg;
			setTotals();
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
		$("#testLink").attr("href",shirtLinks[itemNumber]);
		console.log($("#testLink").attr("href"));
	});

//end catviewer


$("#numItemsOpts").change(function(){
	getNumberOfItems();
});

$("#numItemsOpts").keyup(function(){
	getNumberOfItems();
});

$("#numItemsOpts").mouseup(function(){
	getNumberOfItems();
});


$("#prodMethodOpts").change(function(){
	getNumberOfItems();
});




$("#numShirts").change(function(){
	if($("#numShirts").val()!=0){
		numberOfColors = $("#numColors").val();
		getNumberOfItems();
		$("#priceChart").children().remove();
		createPriceTable();
	}
});

$("#shirtType").change(function(){
	if($("#numShirts").val()!=0){
		numberOfColors = $("#numColors").val();
		getNumberOfItems();
		$("#priceChart").children().remove();
		createPriceTable();
	}
});


$("#submit").click(function(){
	numberOfColors = $("#numColors").val();
	getNumberOfItems();
	$("#priceChart").children().remove();
	// createPriceTable();
});

// createPriceTable();

//functions