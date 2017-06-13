var shirtNum;
var shirtColors = document.getElementById("numColors");
var getShirtDataObject;

var shirtData["one"["a":18,"b":11.5,"c":9,"d":7.75,"e":5.98,"f":5.25,"g":4.98,"h":4.7,"i":4.4,"j":4.1,"k":3.75,"l":3.55,"m":3.43,"n":3.15]];

var shirtData1 = {
	a:18,
	b:11.5,
	c:9,
	d:7.75,
	e:5.98,
	f:5.25,
	g:4.98,
	h:4.7,
	i:4.4,
	j:4.1,
	k:3.75,
	l:3.55,
	m:3.43,
	n:3.15
}

var shirtData2 = {
	a:21,
	b:13.50,
	c:10.75,
	d:9.50,
	e:7.25,
	f:6.25,
	g:5.97,
	h:5.5,
	i:5.10,
	j:4.95,
	k:4.40,
	l:4.20,
	m:3.9,
	n:3.30
}

var shirtData3={
	a:23,
	b:15,
	c:11.50,
	d:10,
	e:7.75,
	f:6.75,
	g:6.5,
	h:6,
	i:5.6,
	j:5.3,
	k:4.65,
	l:4.4,
	m:4.1,
	n:3.45
}

var shirtData4={
	a:24,
	b:16,
	c:12,
	d:10.5,
	e:8.2,
	f:7,
	g:6.8,
	h:6.4,
	i:5.9,
	j:5.5,
	k:4.9,
	l:4.6,
	m:4.4,
	n:3.65
}

var shirtData5={
	a:25,
	b:17,
	c:12.5,
	d:11,
	e:9.2,
	f:7.25,
	g:7,
	h:6.65,
	i:6.1,
	j:5.7,
	k:5.2,
	l:4.8,
	m:4.6,
	n:3.85
}




$("#numColors").change(function(){
	shirtColors = $("#numColors").val();
		switch(shirtColors){
	 	case "one":
	 		getShirtDataObject="shirtData1";
	 	break;
	 	case "two":
	 		getShirtDataObject="shirtData2";
	 	break;
	 	case "three":
	 		getShirtDataObject="shirtData3";
	 	break;
	 	case "four":
	 		getShirtDataObject="shirtData4";
	 	break;
	 	case "five":
	 		getShirtDataObject="shirtData5";
	 	break;
	}
});

$('#submit').click(function(){
	
	//clear display field
	//get number of colors
		//set variable based on range
	//get number of shirts
		//set variable based on 
	//get amount out of array and display in display field
});

