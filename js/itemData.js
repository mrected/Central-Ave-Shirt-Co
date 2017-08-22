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
		base:"designer/images/designerImages/tshirt-base.png",
		highlights:"designer/images/designerImages/tshirt-highlights.png",
		shadows:"designer/images/designerImages/tshirt-shadows.png",
		name:"T-Shirt",
		adtnlChrg:0,
		linkAttr_design:"designShirt",
		linkAttr_quote:"<a href='",
		linkAttr_info:'tshirt.html',
		linkAttr_vendor:"http://www.helinger.com/ProductResults/?SearchTerms=t-shirt",
		colors:{
			royal:'#283675',
			gold:'#d59211',
			teal:'#00a8b0',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"Pretty straight-forward, it's a t-shirt. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		sizes:"xs-4x"
	},
	{
		image:"images/catImages/item_1.jpg",
		base:"designer/images/designerImages/ls-base.png",
		highlights:"designer/images/designerImages/ls-highlights.png",
		shadows:"designer/images/designerImages/ls-shadows.png",
		name:"Long Sleeve",
		adtnlChrg:2.5,
		linkAttr_design:"designLs",
		linkAttr_quote:"quoteLs",
		linkAttr_info:'longsleeve.html',
		linkAttr_vendor:"http://www.helinger.com/ProductResults/?SearchTerms=long%20sleeve",
		colors:{
			grey:'#7f7f7f',
			royal:'#283675',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"It's just like a t-shirt, but with more sleeve. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		sizes:"xs-4x"
	},
	{
		image:"images/catImages/item_2.jpg",
		base:"designer/images/designerImages/tank-base.png",
		highlights:"designer/images/designerImages/tank-highlights.png",
		shadows:"designer/images/designerImages/tank-shadows.png",
		name:"Tank Top",
		adtnlChrg:0,
		linkAttr_design:"designTank",
		linkAttr_quote:"quoteTank",
		linkAttr_info:'tank.html',
		linkAttr_vendor:"http://www.helinger.com/ProductResults/?SearchTerms=tank%20top",
		colors:{
			pink:'#ff7fa4',
			royal:'#283675',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"Looks nothing like a tank. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		sizes:"xs-2x"
	},
	{
		image:"images/catImages/item_3.jpg",
		base:"designer/images/designerImages/polo-base.png",
		highlights:"designer/images/designerImages/polo-highlights.png",
		shadows:"designer/images/designerImages/polo-shadows.png",
		name:"Polo",
		adtnlChrg:3.5,
		linkAttr_design:"designPolo",
		linkAttr_quote:"quotePolo",
		linkAttr_info:'polo.html',
		linkAttr_vendor:"http://www.helinger.com/ProductResults/?SearchTerms=polo",
		colors:{
			coastalBlue:'#096db7',
			royal:'#283675',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"Don't play polo without one. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		sizes:"xs-3x"
	},
	{
		image:"images/catImages/item_4.jpg",
		base:"designer/images/designerImages/hoodie-base.png",
		highlights:"designer/images/designerImages/hoodie-highlights.png",
		shadows:"designer/images/designerImages/hoodie-shadows.png",
		name:"Hoodie",
		adtnlChrg:5,
		linkAttr_design:"designHoodie",
		linkAttr_quote:"quoteHoodie",
		linkAttr_info:'hoodie.html',
		linkAttr_vendor:"http://www.helinger.com/ProductResults/?SearchTerms=hoodie",
		colors:{
			lightRed:'#a62626',
			royal:'#283675',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"Like a sweater with a hood on it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		sizes:"sm-4x"
	},
	{
		image:"images/catImages/item_5.jpg",
		base:"designer/images/designerImages/hat-base.png",
		highlights:"designer/images/designerImages/hat-highlights.png",
		shadows:"designer/images/designerImages/hat-shadows.png",
		name:"Hat",
		adtnlChrg:-1.75,
		linkAttr_design:"designHat",
		linkAttr_quote:"quoteHat",
		linkAttr_info:'hat.html',
		linkAttr_vendor:"http://www.helinger.com/ProductResults/?SearchTerms=hats",
		colors:{
			royal:'#283675',
			red:'#990000',
			black:'#000',
			white:'#fff'
		},
		desc:"Goes on your head. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		sizes:"sm-md, md-xl"
	}
];



const shirtLinks =["shortSleeve.html",
				 "longSleeve.html",
				 "tank.html",
				 "polo.html",
				 "hoodie.html",
				 "hats"];





