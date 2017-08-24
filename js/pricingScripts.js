//data
//ADDING SHIRTS:  
//add a case to shirtType
//add an else if statement to createPriceTable
//add an option to shirtprices.html




//VARIABLES*************************
let numberOfItems;
let itemNumGroup=0;
let itemNumber=0;
let numberOfStyles=Object.keys(itemInfo).length;
let itemTotal;
let itemAdtlCost=0;
let itemProdCost=0;
isSetItemNumber();
let itemSrcString = "images/catImages/item_" + itemNumber + ".jpg";
let addCost=0;
const prodMethod = {
	'scr':0,
	'dtg':4.5,
	'emb':2.5
}



//FUNCTIONS*************************

function isSetItemNumber(){
	
	if(typeof(sessionStorage.getItem("sendProductPrice"))==='string'){
		
		itemNumber = sessionStorage.getItem("sendProductPrice").substr(1);
		sessionStorage.removeItem("sendProductPrice");
	}
	else{
		itemNumber = 0;
	}
}


function getNumberOfItems(){
	numberOfItems = $("#numItemsOpts").val();

	if(numberOfItems >10000 || numberOfItems<1){

		$("#info").addClass("warningBox");
		$("#info").html("Please enter a number between 0 &amp; 10000");
		$("#total").html("");
		$("#itemTotalTxt").html("");
		numberOfItems = 0;
		itemNumGroup = 0;
	}
	else if(numberOfItems % 1 !== 0){

		$("#info").addClass("warningBox");
		$("#info").html("We can't sell a percentage of a shirt");
		$("#total").html("");
		$("#itemTotalTxt").html("");
		numberOfItems = 0;
		itemNumGroup = 0;
	}
	else{
		$("#info").removeClass("warningBox");
		$("#info").html("");

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

function setTotals(){
	getItemProdCost();
	itemAdtlCost = itemInfo[itemNumber].adtnlChrg;
	itemTotal=(roundCurrency(itemCostData.c1[itemNumGroup]+itemAdtlCost+itemProdCost));
	
	$("#itemTotalTxt").html("$" + itemTotal);
	$("#total").html("$" + roundCurrency((itemCostData.c1[itemNumGroup]+itemAdtlCost+itemProdCost) * $("#numItemsOpts").val()));
}

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

function createPriceTable(){
	let headerLength = Object.keys(itemCostData).length;
	let dataLength = itemCostData.c1.length;
	let tableHeaders="<thead><tr class='mainTableHeader'><th class='text-center'>Quantity</th><th colspan='1'>&nbsp;</th><th class='text-center'>Production Method</th><th>&nbsp;</th></tr>";
	let tableData="";
	let tableComplete="";
	addCost = itemInfo[itemNumber].adtnlChrg
	
	tableHeaders+= "<tr class='secondaryTableHeader'><th>&nbsp;</th><th class='text-center headerRowColor'>Screen Print</th>";
	tableHeaders+= "<th class='text-center headerRowColor'>Digital Full Color</th>";
	tableHeaders+= "<th class='text-center headerRowColor'>Embroidery</th>";
	
	tableHeaders +="</tr></thead>"
	for(let i=0;i<dataLength;i++){
		tableData+="<tbody><tr><td class='text-center'><strong>"+shirtNumbers[i]+"</strong></td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c1[i]+addCost+prodMethod.scr)+"</td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c1[i]+addCost+prodMethod.dtg)+"</td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c1[i]+addCost+prodMethod.emb)+"</td><tr></tbody>";
	}
	$("#priceChart").children().remove();
	$("#priceChart").append(tableHeaders + tableData);
}

//viewer
function preloadImages(){
	let preloaderString = "";
	for(let i=0; i<numberOfStyles;i++){
		preloaderString+="<img aria-hidden='true' src='images/catImages/item_" + i + ".jpg'>";
	}
	$("#preloader").html(preloaderString);
}

function displayName(){
	$("#itemType").html(itemInfo[itemNumber].name);
}

// function sendProductVar(){
// 		let product = "#" + $(this).attr("name");
// 		sessionStorage.setItem("sendProduct",product);
// 	};

function updateLinks(){
	$("#designLink").attr('name',itemInfo[itemNumber].linkAttr_design);
	$("#infoLink").attr('href',itemInfo[itemNumber].linkAttr_info);
	// $(".designThisBtn .priceThisBtn").on("click", sendProductVar);

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
		setTotals();
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
		setTotals();
		displayName();
	});

}

$("#catViewerPrev, #catViewerNext").hover(function(){
	$(this).css({"color": "#d84727","cursor": "pointer"});
},function(){
	$(this).css("color","#2292a4");
});

$("#catViewerPrev").click(function(){
	prevItem();
	createPriceTable();
});

$("#catViewerPrev").hover(function(){
	$("#");
});

$("#catViewerNext").click(function(){
	nextItem();
	createPriceTable();
});
//end viewer





//EVENTS/CALLS*************************

getNumberOfItems();
preloadImages();
displayName();
updateLinks();
setTotals();
displayName();
createPriceTable();

$(".catViewerImg").attr("src", itemSrcString);


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


$("#submit").click(function(){
	getNumberOfItems();
	$("#priceChart").children().remove();
});

