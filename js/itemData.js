const itemCostData = {

	c1:[18,11.5,9,7.75,5.98,5.25,4.98,4.7,4.4,4.1,3.75,3.55,3.43,3.15],
	c2:[21,13.50,10.75,9.50,7.25,6.25,5.97,5.5,5.10,4.95,4.40,4.20,3.9,3.30],
	c3:[23,15,11.50,10,7.75,6.75,6.5,6,5.6,5.3,4.65,4.4,4.1,3.45],
	c4:[24,16,12,10.5,8.2,7,6.8,6.4,5.9,5.5,4.9,4.6,4.4,3.65],
	c5:[25,17,12.5,11,9.2,7.25,7,6.65,6.1,5.7,5.2,4.8,4.6,3.85],

};

const itemNumbers = ["1-5",
					"6-10",
					"11-15",
					"16-20",
					"21-40",
					"41-60",
					"61-80",
					"81-100",
					"101-140",
					"141-200",
					"201-300",
					"301-400",
					"401-500",
					"500+"];

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
		productImages:{
			items:{
				black:'images/productImages/tshirt/tshirt-black-th.png',
				charcoal:'images/productImages/tshirt/tshirt-charcoal.png',
				green:'images/productImages/tshirt/tshirt-green.png',
				maroon:'images/productImages/tshirt/tshirt-maroon.png',
				navy:'images/productImages/tshirt/tshirt-navy.png',
				orange:'images/productImages/tshirt/tshirt-orange.png',
				red:'images/productImages/tshirt/tshirt-red.png',
				royal:'images/productImages/tshirt/tshirt-royal.png',
				sapphire:'images/productImages/tshirt/tshirt-sapphire.png',
				yellowGold:'images/productImages/tshirt/tshirt-yellowGold.png',
			},
			item_thumbnails:{
				black:'images/productImages/tshirt/tshirt-black-th.png',
				charcoal:'images/productImages/tshirt/tshirt-charcoal-th.png',
				green:'images/productImages/tshirt/tshirt-green-th.png',
				maroon:'images/productImages/tshirt/tshirt-maroon-th.png',
				navy:'images/productImages/tshirt/tshirt-navy-th.png',
				orange:'images/productImages/tshirt/tshirt-orange-th.png',
				red:'images/productImages/tshirt/tshirt-red-th.png',
				royal:'images/productImages/tshirt/tshirt-royal-th.png',
				sapphire:'images/productImages/tshirt/tshirt-sapphire-th.png',
				['yellow gold']:'images/productImages/tshirt/tshirt-yellowGold-th.png'
			}

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
		productImages:{
			items:{
				amethyst:'images/productImages/ls/ls-amethyst.png',
				coal:'images/productImages/ls/ls-coal.png',
				dijon:'images/productImages/ls/ls-dijon.png',
				glacier:'images/productImages/ls/ls-glacier.png',
				merlot:'images/productImages/ls/ls-merlot.png',
				mist:'images/productImages/ls/ls-mist.png',
				['neon pink']:'images/productImages/ls/ls-neonpink.png',
				peacock:'images/productImages/ls/ls-peacock.png',
				pewter:'images/productImages/ls/ls-pewter.png',
				poppy:'images/productImages/ls/ls-poppy.png',
				redrock:'images/productImages/ls/ls-redrock.png',
				safari:'images/productImages/ls/ls-safari.png',
				['tidal wave']:'images/productImages/ls/ls-tidalwave.png',
				white:'images/productImages/ls/ls-white.png'				
			},
			item_thumbnails:{
				amethyst:'images/productImages/ls/ls-amethyst-th.png',
				coal:'images/productImages/ls/ls-coal-th.png',
				dijon:'images/productImages/ls/ls-dijon-th.png',
				glacier:'images/productImages/ls/ls-glacier-th.png',
				merlot:'images/productImages/ls/ls-merlot-th.png',
				mist:'images/productImages/ls/ls-mist-th.png',
				['neon pink']:'images/productImages/ls/ls-neonpink-th.png',
				peacock:'images/productImages/ls/ls-peacock-th.png',
				pewter:'images/productImages/ls/ls-pewter-th.png',
				poppy:'images/productImages/ls/ls-poppy-th.png',
				redrock:'images/productImages/ls/ls-redrock-th.png',
				safari:'images/productImages/ls/ls-safari-th.png',
				['tidal wave']:'images/productImages/ls/ls-tidalwave-th.png',
				white:'images/productImages/ls/ls-white-th.png'
			}

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
		productImages:{
			items:{
				['athletic heather']:'images/productImages/tank/tank-athletichthr.png',
				charcoal:'images/productImages/tank/tank-charcoal.png',
				black:'images/productImages/tank/tank-jetblack.png',
				navy:'images/productImages/tank/tank-navy.png',
				['neon blue']:'images/productImages/tank/tank-neonblue.png',
				['neon green']:'images/productImages/tank/tank-neongreen.png',
				['neon pink']:'images/productImages/tank/tank-neonpink.png',
				['neon yellow']:'images/productImages/tank/tank-neonyellow.png',
				red:'images/productImages/tank/tank-red.png',
				royal:'images/productImages/tank/tank-royal.png',
				white:'images/productImages/tank/tank-white.png'				
			},
			item_thumbnails:{
				['athletic heather']:'images/productImages/tank/tank-athletichthr-th.png',
				charcoal:'images/productImages/tank/tank-charcoal-th.png',
				black:'images/productImages/tank/tank-jetblack-th.png',
				navy:'images/productImages/tank/tank-navy-th.png',
				['neon blue']:'images/productImages/tank/tank-neonblue-th.png',
				['neon green']:'images/productImages/tank/tank-neongreen-th.png',
				['neon pink']:'images/productImages/tank/tank-neonpink-th.png',
				['neon yellow']:'images/productImages/tank/tank-neonyellow-th.png',
				red:'images/productImages/tank/tank-red-th.png',
				royal:'images/productImages/tank/tank-royal-th.png',
				white:'images/productImages/tank/tank-white-th.png'	
			}

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
		productImages:{
			items:{
				['aquatic blue']:'images/productImages/polo/polo-aquaticblue.png',
				maroon:'images/productImages/polo/polo-athmaroon.png',
				charcoal:'images/productImages/polo/polo-charcoal.png',
				['dark green']:'images/productImages/polo/polo-darkgreen.png',
				navy:'images/productImages/polo/polo-deepnavy.png',
				gold:'images/productImages/polo/polo-gold.png',
				black:'images/productImages/polo/polo-jetblack.png',
				green:'images/productImages/polo/polo-kelly.png',
				['light blue']:'images/productImages/polo/polo-lightblue.png',
				lime:'images/productImages/polo/polo-lime.png',
				grey:'images/productImages/polo/polo-mediumgrey.png',
				purple:'images/productImages/polo/polo-purple.png',
				royal:'images/productImages/polo/polo-royal.png',
				silver:'images/productImages/polo/polo-silver.png',
				white:'images/productImages/polo/polo-white.png'				
			},
			item_thumbnails:{
				['aquatic blue']:'images/productImages/polo/polo-aquaticblue-th.png',
				maroon:'images/productImages/polo/polo-athmaroon-th.png',
				charcoal:'images/productImages/polo/polo-charcoal-th.png',
				['dark green']:'images/productImages/polo/polo-darkgreen-th.png',
				navy:'images/productImages/polo/polo-deepnavy-th.png',
				gold:'images/productImages/polo/polo-gold-th.png',
				black:'images/productImages/polo/polo-jetblack-th.png',
				green:'images/productImages/polo/polo-kelly-th.png',
				['light blue']:'images/productImages/polo/polo-lightblue-th.png',
				lime:'images/productImages/polo/polo-lime-th.png',
				grey:'images/productImages/polo/polo-mediumgrey-th.png',
				purple:'images/productImages/polo/polo-purple-th.png',
				royal:'images/productImages/polo/polo-royal-th.png',
				silver:'images/productImages/polo/polo-silver-th.png',
				white:'images/productImages/polo/polo-white-th.png'
			}

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
		productImages:{
			items:{
				['athletic heather']:'images/productImages/hoodie/hoodie-athletichthr.png',
				red:'images/productImages/hoodie/hoodie-brightred.png',
				charcoal:'images/productImages/hoodie/hoodie-charcoal.png',
				['dark hthr grey']:'images/productImages/hoodie/hoodie-darkhthrgrey.png',
				['forest green']:'images/productImages/hoodie/hoodie-forestgreen.png',
				garnet:'images/productImages/hoodie/hoodie-garnet.png',
				black:'images/productImages/hoodie/hoodie-jetblack.png',
				sapphire:'images/productImages/hoodie/hoodie-sapphire.png',
				cardinal:'images/productImages/hoodie/hoodie-teamcardinal.png',
				navy:'images/productImages/hoodie/hoodie-teamnavy.png',
				purple:'images/productImages/hoodie/hoodie-teampurple.png',
				royal:'images/productImages/hoodie/hoodie-trueroyal.png',
				white:'images/productImages/hoodie/hoodie-white.png'			
			},
			item_thumbnails:{
				['athletic heather']:'images/productImages/hoodie/hoodie-athletichthr-th.png',
				red:'images/productImages/hoodie/hoodie-brightred-th.png',
				charcoal:'images/productImages/hoodie/hoodie-charcoal-th.png',
				['dark hthr grey']:'images/productImages/hoodie/hoodie-darkhthrgrey-th.png',
				['forest green']:'images/productImages/hoodie/hoodie-forestgreen-th.png',
				garnet:'images/productImages/hoodie/hoodie-garnet-th.png',
				black:'images/productImages/hoodie/hoodie-jetblack-th.png',
				sapphire:'images/productImages/hoodie/hoodie-sapphire-th.png',
				cardinal:'images/productImages/hoodie/hoodie-teamcardinal-th.png',
				navy:'images/productImages/hoodie/hoodie-teamnavy-th.png',
				purple:'images/productImages/hoodie/hoodie-teampurple-th.png',
				royal:'images/productImages/hoodie/hoodie-trueroyal-th.png',
				white:'images/productImages/hoodie/hoodie-white-th.png'
			}

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
		productImages:{
			items:{
				black:'images/productImages/hat/hat-black.png',
				['dark navy']:'images/productImages/hat/hat-darknavy.png',
				grey:'images/productImages/hat/hat-grey.png',
				khaki:'images/productImages/hat/hat-khaki.png',
				navy:'images/productImages/hat/hat-navy.png',
				red:'images/productImages/hat/hat-red.png',
				royal:'images/productImages/hat/hat-royal.png'
			},
			item_thumbnails:{
				black:'images/productImages/hat/hat-black-th.png',
				['dark navy']:'images/productImages/hat/hat-darknavy-th.png',
				grey:'images/productImages/hat/hat-grey-th.png',
				khaki:'images/productImages/hat/hat-khaki-th.png',
				navy:'images/productImages/hat/hat-navy-th.png',
				red:'images/productImages/hat/hat-red-th.png',
				royal:'images/productImages/hat/hat-royal-th.png'
			}

		},
		desc:"Goes on your head. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		sizes:"sm-md, md-xl"
	}
];
