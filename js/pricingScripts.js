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
let itemType="ss";
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
	if(numberOfItems >10000 || numberOfItems<=0){
		$("#itemTotal").removeClass("bg-success");
		$("#total").removeClass("bg-success");
		$("#info").addClass("warningBox");
		$("#info").html("Please enter a number between 0 &amp; 10000");
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

// cvShirtType=["T-Shirt",
// 				"Long Sleeve",
// 				"Tank Top",
// 				"Polo Shirt",
// 				"Hoodie",
// 				"Hats"];

function setTotals(){
	//selectedShirts

	getItemProdCost();
	itemTotal=(roundCurrency(shirtData.c1[numberOfItems]+itemAdtlCost+itemProdCost));


	$("#itemTotal").addClass("bg-success").html(itemTotal);
	$("#total").addClass("bg-success");
	$("#total").html("$" + roundCurrency((shirtData.c1[numberOfItems]+itemAdtlCost+itemProdCost) * $("#numItemsOpts").val()));
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






// $("#shirtType").change(function(){
// 	switch($("#shirtType").val()){
// 		case "ss":
// 			shirtType = "ss";
// 			addCost = 0;
// 			$("#selectedShirt").text("Short Sleeve Shirts");
// 			break;

// 		case "ls":
// 			shirtType = "ls";
// 			addCost = 2.5;
// 			$("#selectedShirt").text("Long Sleeve Shirts");
// 			break;
// 		case "tt":
// 			shirtType = "tt";
// 			addCost = 0;
// 			$("#selectedShirt").text("Tank Top");
// 			break;

// 		case "po":
// 			shirtType = "po";
// 			addCost = 3.5;
// 			$("#selectedShirt").text("Polo Shirts");
// 			break;

// 		case "ho":
// 			shirtType = "ho";
// 			addCost = 5;
// 			$("#selectedShirt").text("Hoodies");
// 			break;

// 		case "ht":
// 			shirtType = "ht";
// 			addCost = 1.5;
// 			$("#selectedShirt").text("Hats");
// 			break;

// 		default:
// 			shirtType = "ss";
// 			addCost = 0;
// 			$("#selectedShirt").text("Short Sleeve Shirts");
// 			break;
// 	}
// 	//console.log("shirtType = " + shirtType + " / addCost = " + addCost);
// 	$("#priceChart").children().remove();
// 	createPriceTable();
// });

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