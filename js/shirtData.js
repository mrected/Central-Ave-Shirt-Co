// for get a quote

const itemCostData = {

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
				   "images/catImages/item_5.jpg"];//REMOVED FROM PRICING SCRIPTS, SCRIPTS

const cvItemType=["T-Shirt",
				"Long Sleeve",
				"Tank Top",
				"Polo Shirt",
				"Hoodie",
				"Hats"];

const shirtDesc =[`Starts at $${itemCostData.c1[0]} <br><a href='designer/designer.html' class='designThisBtn' name='designShirt'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`,
				`Starts at $${(itemCostData.c1[0]+2.50).toFixed(2)} <br><a href='designer/designer.html' class='designThisBtn' name='designLs'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`,
				`Starts at $${itemCostData.c1[0]} <br><a href='designer/designer.html' class='designThisBtn' name='designTank'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`,
				`Starts at $${(itemCostData.c1[0]+3.50).toFixed(2)}  <br><a href='designer/designer.html' class='designThisBtn' name='designPolo'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`,
				`Starts at $${(itemCostData.c1[0]+5).toFixed(2)}  <br><a href='designer/designer.html' class='designThisBtn' name='designHoodie'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`,
				`Starts at $${(itemCostData.c1[0]+1.50).toFixed(2)}  <br><a href='designer/designer.html' class='designThisBtn' name='designHat'>Design this</a> | <a href='#'>Quote this</a> | <a href='#'>More info</a>`]

const itemInfo = [
	{
		image:"images/catImages/item_0.jpg",
		name:"T-Shirt",
		adtnlChrg:0,
		linkAttr_design:"designShirt",
		linkAttr_quote:"quoteShirt",
		linkAttr_info:"<a href='catalog.html' name='infoShirt'>More Info</a>",
		colors:{
			royal:'#283675',
			gold:'#d59211',
			teal:'#00a8b0',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"Defined slub cotton adds more dimension to this everyday tee.",
		sizes:"xs-4x"
	},
	{
		image:"images/catImages/item_1.jpg",
		name:"Long Sleeve",
		adtnlChrg:2.5,
		linkAttr_design:"designLs",
		linkAttr_quote:"quoteLs",
		linkAttr_info:"<a href='catalog.html' name='infoLs'>More Info</a>",
		colors:{
			grey:'#7f7f7f',
			royal:'#283675',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"It's just like a t-shirt, but with more sleeve.",
		sizes:"xs-4x"
	},
	{
		image:"images/catImages/item_2.jpg",
		name:"Tank Top",
		adtnlChrg:0,
		linkAttr_design:"designTank",
		linkAttr_quote:"quoteTank",
		linkAttr_info:"<a href='catalog.html' name='infoTank'>More Info</a>",
		colors:{
			pink:'#ff7fa4',
			royal:'#283675',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"Looks nothing like a tank.",
		sizes:"xs-2x"
	},
	{
		image:"images/catImages/item_3.jpg",
		name:"Polo",
		adtnlChrg:3.5,
		linkAttr_design:"designPolo",
		linkAttr_quote:"quotePolo",
		linkAttr_info:"<a href='catalog.html' name='infoPolo'>More Info</a>",
		colors:{
			coastalBlue:'#096db7',
			royal:'#283675',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"Don't play polo without one.",
		sizes:"xs-3x"
	},
	{
		image:"images/catImages/item_4.jpg",
		name:"Hoodie",
		adtnlChrg:5,
		linkAttr_design:"designHoodie",
		linkAttr_quote:"quoteHoodie",
		linkAttr_info:"<a href='catalog.html' name='infoHoodie'>More Info</a>",
		colors:{
			lightRed:'#a62626',
			royal:'#283675',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"Like a sweater with a hood on it.",
		sizes:"sm-4x"
	},
	{
		image:"images/catImages/item_5.jpg",
		name:"Hat",
		adtnlChrg:0,
		linkAttr_design:"designHat",
		linkAttr_quote:"quoteHat",
		linkAttr_info:"<a href='catalog.html' name='infoHat'>More Info</a>",
		colors:{
			royal:'#283675',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"Goes on your head.",
		sizes:"sm-md, md-xl"
	}
];



const shirtLinks =["shortSleeve.html",
				 "longSleeve.html",
				 "tankTop.html",
				 "poloShirt.html",
				 "hoodie.html",
				 "hats"];





