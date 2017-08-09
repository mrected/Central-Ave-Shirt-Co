// for get a quote

const shirtData = {

	c1:[18,11.5,9,7.75,5.98,5.25,4.98,4.7,4.4,4.1,3.75,3.55,3.43,3.15],
	c2:[21,13.50,10.75,9.50,7.25,6.25,5.97,5.5,5.10,4.95,4.40,4.20,3.9,3.30],
	c3:[23,15,11.50,10,7.75,6.75,6.5,6,5.6,5.3,4.65,4.4,4.1,3.45],
	c4:[24,16,12,10.5,8.2,7,6.8,6.4,5.9,5.5,4.9,4.6,4.4,3.65],
	c5:[25,17,12.5,11,9.2,7.25,7,6.65,6.1,5.7,5.2,4.8,4.6,3.85],

}

const shirtNumbers = ["1-5","6-10","11-15","16-20","21-40","41-60","61-80","81-100","101-140","141-200","201-300","301-400","401-500","500+"];

// for catagory viewer

const shirtsArray = ["images/catImages/item_0.jpg",
				   "images/catImages/item_1.jpg",
				   "images/catImages/item_2.jpg",
				   "images/catImages/item_3.jpg",
				   "images/catImages/item_4.jpg",
				   "images/catImages/item_5.jpg"];

const cvShirtType=["T-Shirt",
				"Long Sleeve",
				"Tank Top",
				"Polo Shirt",
				"Hoodie",
				"Hats"];

const shirtDesc =[`Starts at $${shirtData.c1[0]} <br><a href='designer/designer.html' class='designThisBtn' name='designShirt'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`,
				`Starts at $${(shirtData.c1[0]+2.50).toFixed(2)} <br><a href='designer/designer.html' class='designThisBtn' name='designLs'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`,
				`Starts at $${shirtData.c1[0]} <br><a href='#'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`,
				`Starts at $${(shirtData.c1[0]+3.50).toFixed(2)}  <br><a href='#'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`,
				`Starts at $${(shirtData.c1[0]+5).toFixed(2)}  <br><a href='#'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`,
				`Starts at $${(shirtData.c1[0]+1.50).toFixed(2)}  <br><a href='#'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`]


				// class='designThisBtn' name='designShirt'

const shirtLinks =["shortSleeve.html",
				 "longSleeve.html",
				 "tankTop.html",
				 "poloShirt.html",
				 "hoodie.html",
				 "hats"];





		// case "po":
		// 	shirtType = "po";
		// 	addCost = 3.5;
		// 	$("#selectedShirt").text("Polo Shirts");
		// 	break;

		// case "ho":
		// 	shirtType = "ho";
		// 	addCost = 5;
		// 	$("#selectedShirt").text("Hoodies");
		// 	break;

		// case "ht":
		// 	shirtType = "ht";
		// 	addCost = 1.5;
		// 	$("#selectedShirt").text("Hats");
		// 	break;
