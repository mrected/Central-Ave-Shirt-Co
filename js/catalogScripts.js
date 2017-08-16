
//VARIABLES*************************
let addCost = itemInfo[itemToShow].adtnlChrg;
const colorArray = Object.values(itemInfo[itemToShow].colors);
const numberOfColors=colorArray.length;
const prodMethod = {
	'scr':0,
	'dtg':4.5,
	'emb':2.5
}





//FUNCTIONS*************************
function setColorBar(){
	let colorBarString = ``;
	for(let i=0;i<numberOfColors;i++){
		colorBarString += `<i style='color:${colorArray[i]};' class='fa fa-square fa-4x' aria-hidden='true'></i> `;
	}
	$("#colorBar").html(colorBarString);
}

function setInfo(){
	$("#itemName").html(itemInfo[itemToShow].name);
	$("#itemDesc").html(itemInfo[itemToShow].desc);
	$("#itemSizes").html(itemInfo[itemToShow].sizes);
}

function createPriceTable(){
	const headerLength = Object.keys(itemCostData).length;
	const dataLength = itemCostData.c1.length;
	let tableHeaders="<tr><th class='text-center'>Quantity</th><th colspan='1'>&nbsp;</th><th class='text-center'>Production Method</th><th>&nbsp;</th></tr>";
	let tableData="";
	let tableComplete="";
	
	tableHeaders+= "<tr><th>&nbsp;</th><th class='text-center headerRowColor'>Screen Print</th>";
	tableHeaders+= "<th class='text-center headerRowColor'>Digital Full Color</th>";
	tableHeaders+= "<th class='text-center headerRowColor'>Embroidery</th>";
	
	tableHeaders +="</tr>"
	for(let i=0;i<dataLength;i++){
		tableData+="<td class='text-center'><strong>"+shirtNumbers[i]+"</strong></td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c1[0]+addCost+prodMethod.scr)+"</td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c1[0]+addCost+prodMethod.dtg)+"</td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c1[0]+addCost+prodMethod.emb)+"</td><tr>";
	}
	$("#selectedItem").html(itemInfo[itemToShow].name);
	$("#priceChart").append(tableHeaders + tableData);
	$("#itemImage").attr('src',itemInfo[itemToShow].image);
}

//EVENTS/CALLS*************************
createPriceTable();
setInfo();
setColorBar();

//enable tabs
$('#infoTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#priceTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#linksTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
