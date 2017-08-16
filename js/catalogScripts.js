let addCost = 0;

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

function createPriceTable(){
	const headerLength = Object.keys(itemCostData).length;
	const dataLength = itemCostData.c1.length;
	let tableHeaders="<tr><th>&nbsp;</th><th colspan='"+(headerLength-1)+"'>Number of Colors</th></tr><tr><th class='text-center'>Number of Shirts</th>";
	let tableData="";
	let tableComplete="";
	for(let i=0;i<headerLength;i++){
		tableHeaders+= "<th class='text-center headerRowColor'>"+(i+1)+"</th>"
	}
	tableHeaders +="</tr>"
	for(let i=0;i<dataLength;i++){
		tableData+="<td class='headerColumnColor text-center'><strong>"+shirtNumbers[i]+"</strong></td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c1[i]+addCost)+"</td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c2[i]+addCost)+"</td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c3[i]+addCost)+"</td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c4[i]+addCost)+"</td>";
		tableData+="<td>$"+roundCurrency(itemCostData.c5[i]+addCost)+"</td><tr>";
	}
	$("#selectedItem").html(itemInfo[itemToShow].name);
	$("#priceChart").append(tableHeaders + tableData);
}

createPriceTable();