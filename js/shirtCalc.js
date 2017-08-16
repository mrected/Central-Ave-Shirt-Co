//data
//ADDING SHIRTS:  
//add a case to shirtType
//add an else if statement to createPriceTable
//add an option to shirtprices.html

var numberOfColors;
var numberOfShirts=0;
var shirtCost;
var totalShirtCost;
var shirtType="ss";
let itemToShow = 4;
const addCost = itemInfo[itemToShow].adtnlChrg;

// function createPriceTable(){
// 	const headerLength = Object.keys(itemCostData).length;
// 	const dataLength = itemCostData.c1.length;
// 	let tableHeaders="<tr><th>&nbsp;</th><th colspan='"+(headerLength-1)+"'>Number of Colors</th></tr><tr><th class='text-center'>Number of Shirts</th>";
// 	let tableData="";
// 	let tableComplete="";
// 	for(let i=0;i<headerLength;i++){
// 		tableHeaders+= "<th class='text-center headerRowColor'>"+(i+1)+"</th>"
// 	}
// 	tableHeaders +="</tr>"
// 	for(let i=0;i<dataLength;i++){
// 		tableData+="<td class='headerColumnColor text-center'><strong>"+shirtNumbers[i]+"</strong></td>";
// 		tableData+="<td>$"+roundCurrency(itemCostData.c1[i]+addCost)+"</td>";
// 		tableData+="<td>$"+roundCurrency(itemCostData.c2[i]+addCost)+"</td>";
// 		tableData+="<td>$"+roundCurrency(itemCostData.c3[i]+addCost)+"</td>";
// 		tableData+="<td>$"+roundCurrency(itemCostData.c4[i]+addCost)+"</td>";
// 		tableData+="<td>$"+roundCurrency(itemCostData.c5[i]+addCost)+"</td><tr>";
// 	}
// 	$("#selectedItem").html(itemInfo[itemToShow].name);
// 	$("#priceChart").append(tableHeaders + tableData);
// }

//initialize selectedShirt on modal window
// document.getElementById("selectedShirt").innerHTML = "Short Sleeve Shirts";

function getNumberOfShirts(){
	numberOfShirts = $("#numShirts").val();
	if(isNaN(numberOfShirts)){
		$("#shirtTotal").removeClass("bg-success");
		$("#costTotal").removeClass("bg-success");
		$("#info").addClass("warningBox");
		document.getElementById("info").innerHTML = "Please enter a valid number";
		document.getElementById("costTotal").innerHTML = "";
		document.getElementById("shirtTotal").innerHTML = "";
	}
	else if(numberOfShirts >10000 || numberOfShirts<=0){
		$("#shirtTotal").removeClass("bg-success");
		$("#costTotal").removeClass("bg-success");
		$("#info").addClass("warningBox");
		document.getElementById("info").innerHTML= "Please enter a number between 0 &amp; 10000";
		document.getElementById("costTotal").innerHTML = "";
		document.getElementById("shirtTotal").innerHTML = "";
	}
	else{
		$("#info").removeClass("warningBox");
		$("#shirtTotal").addClass("bg-success");
		$("#costTotal").addClass("bg-success");
		if(numberOfShirts<=5){
			numberOfShirts= 0;
		}
		else if(numberOfShirts<=10){
			numberOfShirts= 1;
		}
		else if(numberOfShirts<=15){
			numberOfShirts= 2;
		}
		else if(numberOfShirts<=20){
			numberOfShirts= 3;
		}
		else if(numberOfShirts<=40){
			numberOfShirts= 4;
		}
		else if(numberOfShirts<=60){
			numberOfShirts= 5;
		}
		else if(numberOfShirts<=80){
			numberOfShirts= 6;
		}
		else if(numberOfShirts<=100){
			numberOfShirts= 7;
		}
		else if(numberOfShirts<=140){
			numberOfShirts= 8;
		}
		else if(numberOfShirts<=200){
			numberOfShirts= 9;
		}
		else if(numberOfShirts<=300){
			numberOfShirts= 10;
		}
		else if(numberOfShirts<=400){
			numberOfShirts= 11;
		}
		else if(numberOfShirts<=500){
			numberOfShirts= 12;
		}
		else{
			numberOfShirts= 13;
		}
		document.getElementById("info").innerHTML= "";
		setCost();
	}
}

function setCost(){
	//selectedShirts
	switch(numberOfColors){
		case "c1":
			shirtCost = shirtData.c1[numberOfShirts];
		break;
		case "c2":
			shirtCost = shirtData.c2[numberOfShirts];
		break;
		case "c3":
			shirtCost = shirtData.c3[numberOfShirts];
		break;
		case "c4":
			shirtCost = shirtData.c4[numberOfShirts];
		break;
		case "c5":
			shirtCost = shirtData.c5[numberOfShirts];
		break;
		default:
			shirtCost = null;
		break;
	}
	shirtCost = shirtCost + addCost;
	shirtCost = roundCurrency(shirtCost);
	totalShirtCost = roundCurrency(shirtCost*$("#numShirts").val());
	document.getElementById("shirtTotal").innerHTML = "$" + shirtCost;
	document.getElementById("costTotal").innerHTML = "$" + totalShirtCost;
	$("#priceChart").children().remove();
	createPriceTable();
}


$("#shirtType").change(function(){
	switch($("#shirtType").val()){
		case "ss":
			shirtType = "ss";
			addCost = 0;
			$("#selectedShirt").text("Short Sleeve Shirts");
			break;

		case "ls":
			shirtType = "ls";
			addCost = 2.5;
			$("#selectedShirt").text("Long Sleeve Shirts");
			break;
		case "tt":
			shirtType = "tt";
			addCost = 0;
			$("#selectedShirt").text("Tank Top");
			break;

		case "po":
			shirtType = "po";
			addCost = 3.5;
			$("#selectedShirt").text("Polo Shirts");
			break;

		case "ho":
			shirtType = "ho";
			addCost = 5;
			$("#selectedShirt").text("Hoodies");
			break;

		case "ht":
			shirtType = "ht";
			addCost = 1.5;
			$("#selectedShirt").text("Hats");
			break;

		default:
			shirtType = "ss";
			addCost = 0;
			$("#selectedShirt").text("Short Sleeve Shirts");
			break;
	}
	//console.log("shirtType = " + shirtType + " / addCost = " + addCost);
	$("#priceChart").children().remove();
	createPriceTable();
});

$("#numColors").change(function(){
	if($("#numShirts").val()!=0){
		numberOfColors = $("#numColors").val();
		getNumberOfShirts();
		$("#priceChart").children().remove();
		createPriceTable();
	}
});

$("#numShirts").change(function(){
	if($("#numShirts").val()!=0){
		numberOfColors = $("#numColors").val();
		getNumberOfShirts();
		$("#priceChart").children().remove();
		createPriceTable();
	}
});

$("#shirtType").change(function(){
	if($("#numShirts").val()!=0){
		numberOfColors = $("#numColors").val();
		getNumberOfShirts();
		$("#priceChart").children().remove();
		createPriceTable();
	}
});


$("#submit").click(function(){
	numberOfColors = $("#numColors").val();
	getNumberOfShirts();
	$("#priceChart").children().remove();
	createPriceTable();
});

createPriceTable();

//functions