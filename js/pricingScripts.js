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

let numberOfColors;
let numberOfItems=0;
let itemTotal;
let totalItemCost;
let itemType="";
let addCost = 0;
let itemAdtlCost=0;
let itemProdCost=0;

const roundCurrency = cost => cost = cost.toFixed(2);

// function createPriceTable(){
// 	const headerLength = Object.keys(shirtData).length;
// 	const dataLength = shirtData.c1.length;
// 	let tableHeaders="<tr><th>&nbsp;</th><th colspan='"+(headerLength-1)+"'>Number of Colors</th></tr><tr><th class='text-center'>Number of Shirts</th>";
// 	let tableData="";
// 	let tableComplete="";
// 	for(e=0;e<headerLength;e++){
// 		tableHeaders+= "<th class='text-center headerRowColor'>"+(e+1)+"</th>"
// 	}
// 	tableHeaders +="</tr>"
// 	for(i=0;i<dataLength;i++){
// 		tableData+="<td class='headerColumnColor text-center'><strong>"+shirtNumbers[i]+"</strong></td>";
// 		tableData+="<td>$"+roundCurrency(shirtData.c1[i]+addCost)+"</td>";
// 		tableData+="<td>$"+roundCurrency(shirtData.c2[i]+addCost)+"</td>";
// 		tableData+="<td>$"+roundCurrency(shirtData.c3[i]+addCost)+"</td>";
// 		tableData+="<td>$"+roundCurrency(shirtData.c4[i]+addCost)+"</td>";
// 		tableData+="<td>$"+roundCurrency(shirtData.c5[i]+addCost)+"</td><tr>";
// 	}
// 	$("#priceChart").append(tableHeaders + tableData);
// }

//initialize selectedShirt on modal window
// document.getElementById("selectedShirt").innerHTML = "Short Sleeve Shirts";

$(".styleBtn").click(function(){
	itemType = $("#cvShirtType").text();
	console.log(itemType);
});



function getNumberOfItems(){
	numberOfItems = $("#numItemsOpts").val();
	// if(isNaN(numberOfItems)){
	// 	$("#itemTotal").removeClass("bg-success");
	// 	$("#total").removeClass("bg-success");
	// 	$("#info").addClass("warningBox");
	// 	document.getElementById("info").innerHTML = "Please enter a valid number";
	// 	document.getElementById("total").innerHTML = "";
	// 	document.getElementById("itemTotal").innerHTML = "";
	// }
	if(numberOfItems >10000 || numberOfItems<1){
		$("#itemTotal").removeClass("bg-success");
		$("#total").removeClass("bg-success");
		$("#info").addClass("warningBox");
		$("#info").html("Please enter a number between 0 &amp; 10000");
		$("#total").html("");
		$("#itemTotal").html("");
		numberOfItems = 0;
	}
	else if(numberOfItems % 1 !== 0){
		$("#itemTotal").removeClass("bg-success");
		$("#total").removeClass("bg-success");
		$("#info").addClass("warningBox");
		$("#info").html("We can't sell a percentage of a shirt");
		$("#total").html("");
		$("#itemTotal").html("");
		numberOfItems = 0;
	}
	else{
		$("#info").removeClass("warningBox");
		$("#info").html("");
		$("#itemTotal").addClass("bg-success");
		$("#total").addClass("bg-success");
		if(numberOfItems<=5){
			numberOfItems= 0;
		}
		else if(numberOfItems<=10){
			numberOfItems= 1;
		}
		else if(numberOfItems<=15){
			numberOfItems= 2;
		}
		else if(numberOfItems<=20){
			numberOfItems= 3;
		}
		else if(numberOfItems<=40){
			numberOfItems= 4;
		}
		else if(numberOfItems<=60){
			numberOfItems= 5;
		}
		else if(numberOfItems<=80){
			numberOfItems= 6;
		}
		else if(numberOfItems<=100){
			numberOfItems= 7;
		}
		else if(numberOfItems<=140){
			numberOfItems= 8;
		}
		else if(numberOfItems<=200){
			numberOfItems= 9;
		}
		else if(numberOfItems<=300){
			numberOfItems= 10;
		}
		else if(numberOfItems<=400){
			numberOfItems= 11;
		}
		else if(numberOfItems<=500){
			numberOfItems= 12;
		}
		else{
			numberOfItems= 13;
		}
		
		setTotals();
	}

}

getNumberOfItems();

cvShirtType=["T-Shirt",
				"Long Sleeve",
				"Tank Top",
				"Polo Shirt",
				"Hoodie",
				"Hats"];

function setTotals(){
	//selectedShirts

	getItemProdCost();
	itemTotal=(roundCurrency(itemCostData.c1[numberOfItems]+itemAdtlCost+itemProdCost));


	$("#itemTotal").addClass("bg-success").html(itemTotal);
	$("#total").addClass("bg-success");
	$("#total").html("$" + roundCurrency((itemCostData.c1[numberOfItems]+itemAdtlCost+itemProdCost) * $("#numItemsOpts").val()));
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


//start catviewer

numberOfItems = Object.keys(itemInfo).length;
	let itemNumber=0;

	var shirtSrcString = "images/catImages/item_" + itemNumber + ".jpg";

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
		if(itemNumber>=numberOfItems-1){
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
			displayInfo();
			updateLinks();
		});
		
	}

	function prevShirt(){
		if(itemNumber<=0){
			itemNumber = numberOfItems-1;
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
	setTotals();
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