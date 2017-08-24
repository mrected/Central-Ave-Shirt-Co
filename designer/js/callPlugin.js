$(document).ready(function(){

	//sets main item on Product Designer from Home
	// alert(sessionStorage.getItem("sendProduct"));
	let setProduct = sessionStorage.getItem("sendProductDesign");
	$("#designShirt").before($(setProduct));
	sessionStorage.removeItem("sendProductDesign");
	// setProduct=("#designShirt");
	//starts plugin

	if(typeof FancyProductDesignerPlus === 'undefined') {
			    alert("For this demo the Fancy Product Designer Plus Add-On is required!");
			    return false;
		    }

  var $fpd = $('#designer'),
        pluginOpts = {
        	stageWidth: 1000, 
        	stageHeight: 800,
        	editorMode: false,
        	fonts: [
				    	{name: 'Helvetica'},
				    	{name: 'Times New Roman'},
				    	{name: 'Pacifico', url: 'google'},
				    	{name: 'Arial'},
			    		{name: 'Lobster', url: 'google'},
			    		{name: 'Fresca', url: 'google'},
			    		{name: 'Indie Flower', url: 'google'},
			    		{name: 'Anton', url: 'google'},
			    		{name: 'Quicksand', url: 'google'},
			    		{name: 'Abril Fatface', url: 'google'},
			    		{name: 'Abel', url: 'google'},
			    		{name: 'Dancing Script', url: 'google'},
			    		{name: 'Acme', url: 'google'},
			    		{name: 'Exo', url: 'google'},
			    		{name: 'Amatic SC', url: 'google'},
			    		{name: 'Cinzel', url: 'google'},
			    		{name: 'Comfortaa', url: 'google'},
			    		{name: 'Permanent Marker', url: 'google'},
			    		{name: 'Antic Slab', url: 'google'}
			    	],
			customTextParameters: {
			    		colors: true,
			    		removable: true,
			    		resizable: true,
			    		draggable: true,
			    		rotatable: true,
			    		autoCenter: true,
			    		boundingBox: "Base"
			    	},
		    customImageParameters: {
			    		draggable: true,
			    		removable: true,
			    		resizable: true,
			    		rotatable: true,
			    		colors: '#000',
			    		autoCenter: true,
			    		boundingBox: "Base"
			    	},
			actions:  {
						'top': ['download','print', 'snap', 'preview-lightbox'],
						'right': ['magnify-glass', 'zoom', 'reset-product', 'qr-code', 'ruler'],
						'bottom': ['undo','redo'],
						'left': ['manage-layers','info','save','load']
					},
			mainBarModules: ['products','images', 'designs', 'text'],
					colorSelectionPlacement: 'outside-br',
					namesNumbersDropdown: ['S', 'M', 'L', 'XL'],
					namesNumbersEntryPrice: 10,
					bulkVariationsPlacement: '#my-variations',
					bulkVariations: {'Size': ['3X','2X','XL', 'L', 'M', 'S']}
        };

  

  designer = new FancyProductDesigner($fpd, pluginOpts);


 //api methods can be used
 designer.print()

  //you can listen to events
  $fpd.on('productCreate', function() {
	//do something
  });

	$('#checkout-button').click(function(){
		//store the views of a product with all elements of a single view
		var productViews = designer.getProduct();
		//loop through all views
		for(var i=0; i < productViews.length; ++i) {
			//output all single view objects
			console.log(productViews[i]);
		}
	});



/*

pass variable from option chosen on home page to designer
switch statement that takes that variable and matches corresponding div and places it at the top of the stack of items

*/

});

