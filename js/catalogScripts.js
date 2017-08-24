
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
	$("#vendorLink").attr('href',itemInfo[itemToShow].linkAttr_vendor);
	$("#designLink").attr('name',itemInfo[itemToShow].linkAttr_design);
	$("#imgBase").attr("src",itemInfo[itemToShow].base);
	$("#imgShadows").attr("src",itemInfo[itemToShow].shadows);
	$("#imgHighlights").attr("src",itemInfo[itemToShow].highlights);
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
		tableData+="<td class='text-center'><strong>"+itemNumbers[i]+"</strong></td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c1[i]+addCost+prodMethod.scr)+"</td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c1[i]+addCost+prodMethod.dtg)+"</td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c1[i]+addCost+prodMethod.emb)+"</td><tr>";
	}
	$("#selectedItem").html(itemInfo[itemToShow].name);
	$("#priceChart").append(tableHeaders + tableData);
	$("#itemImage").attr('src',itemInfo[itemToShow].image);
}

function catTab(evt, tabName) {
    // Declare all variables
    let i;
    let tabcontent;
    let tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = $(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}



$(window).resize(setThumbnailHeight);

function setThumbnailHeight(){
	let itemLayers_H = $("#imgBase").height()+20;
	$("#itemLayersDiv").height(itemLayers_H);
}



//EVENTS/CALLS*************************
document.getElementById("defaultOpen").click();
createPriceTable();
setInfo();
setColorBar();


$("document").ready(function(){
	setTimeout(function(){
		setThumbnailHeight();
	},10);
});



