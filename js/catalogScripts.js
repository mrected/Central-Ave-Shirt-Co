
//VARIABLES*************************
let addCost = itemInfo[itemToShow].adtnlChrg;
const colorArray = Object.values(itemInfo[itemToShow].productImages.items);
const showThumbnailsArray = Object.values(itemInfo[itemToShow].productImages.item_thumbnails);
const colorTitlesArray = Object.keys(itemInfo[itemToShow].productImages.items);
const numberOfColors=colorArray.length;
const showItem = colorArray[Math.floor(Math.random()*numberOfColors)];
let itemColor="";

const prodMethod = {
	'scr':0,
	'dtg':4.5,
	'emb':2.5
}





//FUNCTIONS*************************
function replaceBackSlash(title){
	return title.replace('_',' ');
}

function setColorBar(){
	let colorBarString = "";
	for(let i=0;i<numberOfColors;i++){
		let colorTitle = replaceBackSlash(colorTitlesArray[i]);
		colorBarString += `<a class="xlDefault" alt="changes item color to ${colorTitle}"><div class="productThumbnail" title="${colorTitlesArray[i]}"><img src="${showThumbnailsArray[i]}" alt="${colorTitle} ${itemInfo[itemToShow].name}"><br><p class="colorTitleLabel">${colorTitle}</p></div></a>`;
		if(i===3 || i===7 || i===11 || i===15){
			colorBarString+=`<br>`;
		}
	}
	$("#colorBar").html(colorBarString);
	$('.productThumbnail').click(function(){
		itemColor = $(this).attr('title');
		$("#itemImage").attr({
			src: itemInfo[itemToShow].productImages.items[itemColor],
			alt: itemColor + " " + itemInfo[itemToShow].name
		})
	});
}

function setInfo(){
	$("#itemName").html(itemInfo[itemToShow].name);
	$("#itemDesc").html(itemInfo[itemToShow].desc);
	$("#itemSizes").html(itemInfo[itemToShow].sizes);
	$("#vendorLink").attr('href',itemInfo[itemToShow].linkAttr_vendor);
	$("#designLink").attr('name',itemInfo[itemToShow].linkAttr_design);
	$("#itemImage").attr("src",showItem);

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



// $(window).resize(setThumbnailHeight);

// function setThumbnailHeight(){
// 	let itemLayers_H = $("#imgBase").height()+20;
// 	$("#itemLayersDiv").height(itemLayers_H);
// }



//EVENTS/CALLS*************************
document.getElementById("defaultOpen").click();
createPriceTable();
setInfo();
setColorBar();


// $("document").ready(function(){
// 	setTimeout(function(){
// 		setThumbnailHeight();
// 	},10);
// });



