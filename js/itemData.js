const itemCostData = {

  c1: [18, 11.5, 9, 7.75, 5.98, 5.25, 4.98, 4.7, 4.4, 4.1, 3.75, 3.55, 3.43, 3.15],
  c2: [21, 13.50, 10.75, 9.50, 7.25, 6.25, 5.97, 5.5, 5.10, 4.95, 4.40, 4.20, 3.9, 3.30],
  c3: [23, 15, 11.50, 10, 7.75, 6.75, 6.5, 6, 5.6, 5.3, 4.65, 4.4, 4.1, 3.45], 
  c4: [24, 16, 12, 10.5, 8.2, 7, 6.8, 6.4, 5.9, 5.5, 4.9, 4.6, 4.4, 3.65],
  c5: [25, 17, 12.5, 11, 9.2, 7.25, 7, 6.65, 6.1, 5.7, 5.2, 4.8, 4.6, 3.85],

};

const itemNumbers = [
  '1-5',
  '6-10',
  '11-15',
  '16-20',
  '21-40',
  '41-60',
  '61-80',
  '81-100',
  '101-140',
  '141-200',
  '201-300',
  '301-400',
  '401-500',
  '500+'];

const itemInfo = [
  // TSHIRT -------------------------------------------------------------- PC54
  {
    image: 'images/catImages/item_0.jpg',
    base: 'designer/images/designerImages/tshirt-base.png',
    highlights: 'designer/images/designerImages/tshirt-highlights.png',
    shadows: 'designer/images/designerImages/tshirt-shadows.png',
    title: 'tshirt',
    name: 'T-Shirt',
    adtnlChrg: 0,
    linkAttr_design: 'designShirt',
    linkAttr_quote: '<a href=\'',
    linkAttr_info: 'tshirt.html',
    linkAttr_vendor: 'http://www.helinger.com/ProductResults/?SearchTerms=t-shirt',
    productImages: {
      items: {
        Aquatic_Blue: 'images/productImages/tshirt/Aquatic_Blue.png',
        Ash: 'images/productImages/tshirt/Ash.png',
        Athletic_Heather: 'images/productImages/tshirt/Athletic_Heather.png',
        Athletic_Maroon: 'images/productImages/tshirt/Athletic_Maroon.png',
        Candy_Pink: 'images/productImages/tshirt/Candy_Pink.png',
        Cardinal: 'images/productImages/tshirt/Cardinal.png',
        Carolina_Blue: 'images/productImages/tshirt/Carolina_Blue.png',
        Charcoal: 'images/productImages/tshirt/Charcoal.png',
        Clover_Green: 'images/productImages/tshirt/Clover_Green.png',
        Dark_Green: 'images/productImages/tshirt/Dark_Green.png',
        Chocolate_Brown: 'images/productImages/tshirt/Heather_Chocolate.png',
        Gold: 'images/productImages/tshirt/Gold.png',
        Heather_Maroon: 'images/productImages/tshirt/Heather_Maroon.png',
        Heather_Brown: 'images/productImages/tshirt/Heather_Brown.png',
        Heather_Navy: 'images/productImages/tshirt/Heather_Navy.png',
        Heather_Purple: 'images/productImages/tshirt/Heather_Purple.png',
        Heather_Red: 'images/productImages/tshirt/Heather_Red.png',
        Heather_Royal: 'images/productImages/tshirt/Heather_Royal.png',
        Heather_Sangria: 'images/productImages/tshirt/Heather_Sangria.png',
        Jet_Black: 'images/productImages/tshirt/Jet_Black.png',
        Kelly: 'images/productImages/tshirt/Kelly.png',
        Lime: 'images/productImages/tshirt/Lime.png',
        Light_Blue: 'images/productImages/tshirt/Light_Blue.png',
        Medium_Grey: 'images/productImages/tshirt/Medium_Grey.png',
        Natural: 'images/productImages/tshirt/Natural.png',
        Navy: 'images/productImages/tshirt/Navy.png',
        Neon_Blue: 'images/productImages/tshirt/Neon_Blue.png',
        Neon_Green: 'images/productImages/tshirt/Neon_Green.png',
        Neon_Orange: 'images/productImages/tshirt/Neon_Orange.png',
        Neon_Pink: 'images/productImages/tshirt/Neon_Pink.png',
        Neon_Yellow: 'images/productImages/tshirt/Neon_Yellow.png',
        Olive: 'images/productImages/tshirt/Olive.png',
        Orange: 'images/productImages/tshirt/Orange.png',
        Purple: 'images/productImages/tshirt/Purple.png',
        Red: 'images/productImages/tshirt/Red.png',
        Royal: 'images/productImages/tshirt/Royal.png',
        Sand: 'images/productImages/tshirt/Sand.png',
        Sangria: 'images/productImages/tshirt/Sangria.png',
        Sapphire: 'images/productImages/tshirt/Sapphire.png',
        Silver: 'images/productImages/tshirt/Silver.png',
        Steel_Blue: 'images/productImages/tshirt/Steel_Blue.png',
        Teal: 'images/productImages/tshirt/Teal.png',
        White: 'images/productImages/tshirt/White.png',
        Yellow: 'images/productImages/tshirt/Yellow.png',
      },
      item_thumbnails: {
        Aquatic_Blue: 'images/productImages/tshirt/Aquatic_Blue-th.png',
        Ash: 'images/productImages/tshirt/Ash-th.png',
        Athletic_Heather: 'images/productImages/tshirt/Athletic_Heather-th.png',
        Athletic_Maroon: 'images/productImages/tshirt/Athletic_Maroon-th.png',
        Candy_Pink: 'images/productImages/tshirt/Candy_Pink-th.png',
        Cardinal: 'images/productImages/tshirt/Cardinal-th.png',
        Carolina_Blue: 'images/productImages/tshirt/Carolina_Blue-th.png',
        Charcoal: 'images/productImages/tshirt/Charcoal-th.png',
        Clover_Green: 'images/productImages/tshirt/Clover_Green-th.png',
        Dark_Green: 'images/productImages/tshirt/Dark_Green-th.png',
        Chocolate_Brown: 'images/productImages/tshirt/Heather_Chocolate-th.png',
        Gold: 'images/productImages/tshirt/Gold-th.png',
        Heather_Maroon: 'images/productImages/tshirt/Heather_Maroon-th.png',
        Heather_Brown: 'images/productImages/tshirt/Heather_Brown-th.png',
        Heather_Navy: 'images/productImages/tshirt/Heather_Navy-th.png',
        Heather_Purple: 'images/productImages/tshirt/Heather_Purple-th.png',
        Heather_Red: 'images/productImages/tshirt/Heather_Red-th.png',
        Heather_Royal: 'images/productImages/tshirt/Heather_Royal-th.png',
        Heather_Sangria: 'images/productImages/tshirt/Heather_Sangria-th.png',
        Jet_Black: 'images/productImages/tshirt/Jet_Black-th.png',
        Kelly: 'images/productImages/tshirt/Kelly-th.png',
        Lime: 'images/productImages/tshirt/Lime-th.png',
        Light_Blue: 'images/productImages/tshirt/Light_Blue-th.png',
        Medium_Grey: 'images/productImages/tshirt/Medium_Grey-th.png',
        Natural: 'images/productImages/tshirt/Natural-th.png',
        Navy: 'images/productImages/tshirt/Navy-th.png',
        Neon_Blue: 'images/productImages/tshirt/Neon_Blue-th.png',
        Neon_Green: 'images/productImages/tshirt/Neon_Green-th.png',
        Neon_Orange: 'images/productImages/tshirt/Neon_Orange-th.png',
        Neon_Pink: 'images/productImages/tshirt/Neon_Pink-th.png',
        Neon_Yellow: 'images/productImages/tshirt/Neon_Yellow-th.png',
        Olive: 'images/productImages/tshirt/Olive-th.png',
        Orange: 'images/productImages/tshirt/Orange-th.png',
        Purple: 'images/productImages/tshirt/Purple-th.png',
        Red: 'images/productImages/tshirt/Red-th.png',
        Royal: 'images/productImages/tshirt/Royal-th.png',
        Sand: 'images/productImages/tshirt/Sand-th.png',
        Sangria: 'images/productImages/tshirt/Sangria-th.png',
        Sapphire: 'images/productImages/tshirt/Sapphire-th.png',
        Silver: 'images/productImages/tshirt/Silver-th.png',
        Steel_Blue: 'images/productImages/tshirt/Steel_Blue-th.png',
        Teal: 'images/productImages/tshirt/Teal-th.png',
        White: 'images/productImages/tshirt/White-th.png',
        Yellow: 'images/productImages/tshirt/Yellow-th.png',
      },

    },
    desc: `<p><strong>An indispensable t-shirt in our classic silhouette—with a very friendly price.</strong></p>
            <ul>
              <li>5.4-ounce, 100% cotton</li>
              <li>90/10 cotton/poly (Athletic Heather)</li>
              <li>50/50 cotton/poly (Neon Blue, Neon Green, Neon Orange, Neon Pink, Neon Yellow, Dark Heather Grey, Heather Athletic Maroon, Heather Purple, Heather Navy, Heather Red, Heather Royal, Heather Sangria, Heather Dark Chocolate Brown)</li>
              <li>98/2 cotton/poly (Ash)</li>
              <li>Due to the nature of 50/50 cotton/polyester neon fabrics, special care must be taken throughout the printing process.</li>
            </ul>
          <p>Please note: This product is transitioning from heat transfer labels to tear-away labels. Your order may contain a combination of both labels. </p>`,
    sizes: 's-4x',
  },

  // RINGSPUN -------------------------------------------------------------- DT6000
  {
    image: 'images/catImages/item_1.jpg',
    base: 'designer/images/designerImages/tank-base.png',
    highlights: 'designer/images/designerImages/tank-highlights.png',
    shadows: 'designer/images/designerImages/tank-shadows.png',
    title: 'ringspun',
    name: 'Ring Spun T-Shirt',
    adtnlChrg: 2,
    linkAttr_design: 'designRST',
    linkAttr_quote: 'quoteRST',
    linkAttr_info: 'rst.html',
    linkAttr_vendor: 'http://www.helinger.com/ProductResults/?SearchTerms=ringspun',
    productImages: {
      items: {
        Light_Turquoise: 'images/productImages/ringspun/Light_Turquoise.png',
        Black: 'images/productImages/ringspun/Black.png',
        Charcoal: 'images/productImages/ringspun/Charcoal.png',
        Classic_Red: 'images/productImages/ringspun/Classic_Red.png',
        Deep_Royal: 'images/productImages/ringspun/Deep_Royal.png',
        Eggplant: 'images/productImages/ringspun/Eggplant.png',
        Evergreen: 'images/productImages/ringspun/Evergreen.png',
        Gold: 'images/productImages/ringspun/Gold.png',
        Grey: 'images/productImages/ringspun/Grey.png',
        Grey_Frost: 'images/productImages/ringspun/Grey_Frost.png',
        Heather_Brown: 'images/productImages/ringspun/Heather_Brown.png',
        Heather_Turquoise: 'images/productImages/ringspun/Heather_Turquoise.png',
        Heather_Cardinal: 'images/productImages/ringspun/Heather_Cardinal.png',
        Heather_Charcoal: 'images/productImages/ringspun/Heather_Charcoal.png',
        Heather_Kelly: 'images/productImages/ringspun/Heather_Kelly.png',
        Heather_Navy: 'images/productImages/ringspun/Heather_Navy.png',
        Heather_Purple: 'images/productImages/ringspun/Heather_Purple.png',
        Heather_Red: 'images/productImages/ringspun/Heather_Red.png',
        Heather_Royal: 'images/productImages/ringspun/Heather_Royal.png',
        Ice_Blue: 'images/productImages/ringspun/Ice_Blue.png',
        Kiwi_Green: 'images/productImages/ringspun/Kiwi_Green.png',
        Lemon_Yellow: 'images/productImages/ringspun/Lemon_Yellow.png',
        Lime_Shock: 'images/productImages/ringspun/Lime_Shock.png',
        Heather_Grey: 'images/productImages/ringspun/Heather_Grey.png',
        Maritime_Blue: 'images/productImages/ringspun/Maritime_Blue.png',
        Neon_Pink: 'images/productImages/ringspun/Neon_Pink.png',
        New_Navy: 'images/productImages/ringspun/New_Navy.png',
        Olive: 'images/productImages/ringspun/Olive.png',
        Orange: 'images/productImages/ringspun/Orange.png',
        Purple: 'images/productImages/ringspun/Purple.png',
        White: 'images/productImages/ringspun/White.png',
      },
      item_thumbnails: {
        Light_Turquoise: 'images/productImages/ringspun/Light_Turquoise-th.png',
        Black: 'images/productImages/ringspun/Black-th.png',
        Charcoal: 'images/productImages/ringspun/Charcoal-th.png',
        Classic_Red: 'images/productImages/ringspun/Classic_Red-th.png',
        Deep_Royal: 'images/productImages/ringspun/Deep_Royal-th.png',
        Eggplant: 'images/productImages/ringspun/Eggplant-th.png',
        Evergreen: 'images/productImages/ringspun/Evergreen-th.png',
        Gold: 'images/productImages/ringspun/Gold-th.png',
        Grey: 'images/productImages/ringspun/Grey-th.png',
        Grey_Frost: 'images/productImages/ringspun/Grey_Frost-th.png',
        Heather_Brown: 'images/productImages/ringspun/Heather_Brown-th.png',
        Heather_Turquoise: 'images/productImages/ringspun/Heather_Turquoise-th.png',
        Heather_Cardinal: 'images/productImages/ringspun/Heather_Cardinal-th.png',
        Heather_Charcoal: 'images/productImages/ringspun/Heather_Charcoal-th.png',
        Heather_Kelly: 'images/productImages/ringspun/Heather_Kelly-th.png',
        Heather_Navy: 'images/productImages/ringspun/Heather_Navy-th.png',
        Heather_Purple: 'images/productImages/ringspun/Heather_Purple-th.png',
        Heather_Red: 'images/productImages/ringspun/Heather_Red-th.png',
        Heather_Royal: 'images/productImages/ringspun/Heather_Royal-th.png',
        Ice_Blue: 'images/productImages/ringspun/Ice_Blue-th.png',
        Kiwi_Green: 'images/productImages/ringspun/Kiwi_Green-th.png',
        Lemon_Yellow: 'images/productImages/ringspun/Lemon_Yellow-th.png',
        Lime_Shock: 'images/productImages/ringspun/Lime_Shock-th.png',
        Heather_Grey: 'images/productImages/ringspun/Heather_Grey-th.png',
        Maritime_Blue: 'images/productImages/ringspun/Maritime_Blue-th.png',
        Neon_Pink: 'images/productImages/ringspun/Neon_Pink-th.png',
        New_Navy: 'images/productImages/ringspun/New_Navy-th.png',
        Olive: 'images/productImages/ringspun/Olive-th.png',
        Orange: 'images/productImages/ringspun/Orange-th.png',
        Purple: 'images/productImages/ringspun/Purple-th.png',
        White: 'images/productImages/ringspun/White-th.png',
      },

    },
    desc: `<p><strong>Crafted from ring spun cotton for ultimate comfort.</strong></p>
            <ul>
              <li>4.3-ounce, 100% ring spun combed cotton, 30 singles</li>
              <li>50/50 ring spun combed cotton/poly (Heathers, Frosts, Neon Pink)</li>
              <li>90/10 ring spun combed cotton/poly (Light Heather Grey)</li>
              <li>Slightly slimmer body and shorter sleeves</li>
              <li>1x1 rib knit neck</li>
              <li>Tear-away label</li>
              <li>Shoulder to shoulder taping</li>
            </ul>`,
    sizes: 'xs-4x',
  },

  // LADIES TANK -------------------------------------------------------------- DM138L
  {
    image: 'images/catImages/item_2.jpg',
    base: 'designer/images/designerImages/tank-base.png',
    highlights: 'designer/images/designerImages/tank-highlights.png',
    shadows: 'designer/images/designerImages/tank-shadows.png',
    title: 'tank',
    name: 'Ladies Tank',
    adtnlChrg: 3,
    linkAttr_design: 'designTank',
    linkAttr_quote: 'quoteTank',
    linkAttr_info: 'tank.html',
    linkAttr_vendor: 'http://www.helinger.com/ProductResults/?SearchTerms=tank%20top',
    productImages: {
      items: {
        athletic_heather: 'images/productImages/tank/tank-athletichthr.png',
        charcoal: 'images/productImages/tank/tank-charcoal.png',
        black: 'images/productImages/tank/tank-jetblack.png',
        navy: 'images/productImages/tank/tank-navy.png',
        neon_blue: 'images/productImages/tank/tank-neonblue.png',
        neon_green: 'images/productImages/tank/tank-neongreen.png',
        neon_pink: 'images/productImages/tank/tank-neonpink.png',
        neon_yellow: 'images/productImages/tank/tank-neonyellow.png',
        red: 'images/productImages/tank/tank-red.png',
        royal: 'images/productImages/tank/tank-royal.png',
        white: 'images/productImages/tank/tank-white.png',
      },
      item_thumbnails: {
        athletic_heather: 'images/productImages/tank/tank-athletichthr-th.png',
        charcoal: 'images/productImages/tank/tank-charcoal-th.png',
        black: 'images/productImages/tank/tank-jetblack-th.png',
        navy: 'images/productImages/tank/tank-navy-th.png',
        neon_blue: 'images/productImages/tank/tank-neonblue-th.png',
        neon_green: 'images/productImages/tank/tank-neongreen-th.png',
        neon_pink: 'images/productImages/tank/tank-neonpink-th.png',
        neon_yellow: 'images/productImages/tank/tank-neonyellow-th.png',
        red: 'images/productImages/tank/tank-red-th.png',
        royal: 'images/productImages/tank/tank-royal-th.png',
        white: 'images/productImages/tank/tank-white-th.png',
      },

    },
    desc: `<p><strong>The perfect mixture of softness, comfort and easy wear.</strong></p>
            <ul>
              <li>4.5-ounce, 50/25/25 poly/ring spun cotton/rayon, 32 singles</li>
              <li>Tear-away label</li>
              <li>Back neck tape</li>
              <li>1x1 rib trim neck and arm openings</li>
              <li>Curved hem</li>
            </ul>
          <p><em>Tri-Blend fabric infuses each garment with unique character. Please allow for slight color variations. Due to the heat sensitivity of tri-blend fabrics, special care must be taken throughout the printing process. Consult your decorator or ink supplier for best printing practices.</em></p>`,
    sizes: 'xs-4x',
  },

  // TRIBLEND -------------------------------------------------------------- ST400
  {
    image: 'images/catImages/item_3.jpg',
    base: 'designer/images/designerImages/tank-base.png',
    highlights: 'designer/images/designerImages/tank-highlights.png',
    shadows: 'designer/images/designerImages/tank-shadows.png',
    title: 'triblendT',
    name: 'TriBlend T-Shirt',
    adtnlChrg: 4,
    linkAttr_design: 'designTriblend',
    linkAttr_quote: 'quoteTriblend',
    linkAttr_info: 'triblend.html',
    linkAttr_vendor: 'http://www.helinger.com/ProductResults/?SearchTerms=ringspun',
    productImages: {
      items: {
        Heather_Green: 'images/productImages/triblend/Heather_Green.png',
        Black: 'images/productImages/triblend/Black.png',
        Heather_DarkGrey: 'images/productImages/triblend/Heather_DarkGrey.png',
        Heather_Orange: 'images/productImages/triblend/Heather_Orange.png',
        Heather_Grey: 'images/productImages/triblend/Heather_Grey.png',
        Heather_Turquoise: 'images/productImages/triblend/Heather_Turquoise.png',
        Heather_Navy: 'images/productImages/triblend/Heather_Navy.png',
        Heather_Red: 'images/productImages/triblend/Heather_Red.png',
        Heather_Royal: 'images/productImages/triblend/Heather_Royal.png',
        White: 'images/productImages/triblend/White.png',
      },
      item_thumbnails: {
        Heather_Green: 'images/productImages/triblend/Heather_Green-th.png',
        Black: 'images/productImages/triblend/Black-th.png',
        Heather_DarkGrey: 'images/productImages/triblend/Heather_DarkGrey-th.png',
        Heather_Orange: 'images/productImages/triblend/Heather_Orange-th.png',
        Heather_Grey: 'images/productImages/triblend/Heather_Grey-th.png',
        Heather_Turquoise: 'images/productImages/triblend/Heather_Turquoise-th.png',
        Heather_Navy: 'images/productImages/triblend/Heather_Navy-th.png',
        Heather_Red: 'images/productImages/triblend/Heather_Red-th.png',
        Heather_Royal: 'images/productImages/triblend/Heather_Royal-th.png',
        White: 'images/productImages/triblend/White-th.png',
      },

    },
    desc: `<p><strong>This ultracomfortable tee combines moisture-wicking performance, unbeatable tri-blend softness and PosiCharge technology to lock in color.</strong></p>
            <ul>
              <li>4.4-ounce, 75/13/12 poly/cotton/rayon jersey with PosiCharge technology</li>
              <li>4.6-ounce, 75/13/12 poly/cotton/rayon jersey with PosiCharge technology (Black Triad Solid)</li>
              <li>4.7-ounce, 75/13/12 poly/cotton/rayon jersey with PosiCharge technology (White)</li>
              <li>Removable tag for comfort and relabeling</li>
              <li>Contrast neck taping (except White, which is dyed-to-match)</li>
              <li>Raglan sleeves</li>
            </ul>
          <p><em>Tri-Blend fabric infuses each garment with unique character. Please allow for slight color variations. Due to the heat sensitivity of tri-blend fabrics, special care must be taken throughout the printing process. Consult your decorator or ink supplier for best printing practices.</em></p>`,
    sizes: 'xs-4x',
  },

  // POLY -------------------------------------------------------------- ST350

  {
    image: 'images/catImages/item_4.jpg',
    base: 'designer/images/designerImages/tank-base.png',
    highlights: 'designer/images/designerImages/tank-highlights.png',
    shadows: 'designer/images/designerImages/tank-shadows.png',
    title: 'tank',
    name: 'Tank Top',
    adtnlChrg: 0,
    linkAttr_design: 'designTank',
    linkAttr_quote: 'quoteTank',
    linkAttr_info: 'tank.html',
    linkAttr_vendor: 'http://www.helinger.com/ProductResults/?SearchTerms=tank%20top',
    productImages: {
      items: {
        athletic_heather: 'images/productImages/tank/tank-athletichthr.png',
        charcoal: 'images/productImages/tank/tank-charcoal.png',
        black: 'images/productImages/tank/tank-jetblack.png',
        navy: 'images/productImages/tank/tank-navy.png',
        neon_blue: 'images/productImages/tank/tank-neonblue.png',
        neon_green: 'images/productImages/tank/tank-neongreen.png',
        neon_pink: 'images/productImages/tank/tank-neonpink.png',
        neon_yellow: 'images/productImages/tank/tank-neonyellow.png',
        red: 'images/productImages/tank/tank-red.png',
        royal: 'images/productImages/tank/tank-royal.png',
        white: 'images/productImages/tank/tank-white.png',				
      },
      item_thumbnails: {
        athletic_heather: 'images/productImages/tank/tank-athletichthr-th.png',
        charcoal: 'images/productImages/tank/tank-charcoal-th.png',
        black: 'images/productImages/tank/tank-jetblack-th.png',
        navy: 'images/productImages/tank/tank-navy-th.png',
        neon_blue: 'images/productImages/tank/tank-neonblue-th.png',
        neon_green: 'images/productImages/tank/tank-neongreen-th.png',
        neon_pink: 'images/productImages/tank/tank-neonpink-th.png',
        neon_yellow: 'images/productImages/tank/tank-neonyellow-th.png',
        red: 'images/productImages/tank/tank-red-th.png',
        royal: 'images/productImages/tank/tank-royal-th.png',
        white: 'images/productImages/tank/tank-white-th.png',	
      },

    },
    desc: `<p><strong>The perfect mixture of softness, comfort and easy wear.</strong></p>
            <ul>
							<li>4.5-ounce, 50/25/25 poly/ring spun cotton/rayon, 32 singles</li>
							<li>Tear-away label</li>
		        	<li>Back neck tape</li>
							<li>1x1 rib trim neck and arm openings</li>
							<li>Curved hem</li>
					  </ul>
	        <p><em>Tri-Blend fabric infuses each garment with unique character. Please allow for slight color variations. Due to the heat sensitivity of tri-blend fabrics, special care must be taken throughout the printing process. Consult your decorator or ink supplier for best printing practices.</em></p>`,
    sizes: 'xs-4x',
  },
];
