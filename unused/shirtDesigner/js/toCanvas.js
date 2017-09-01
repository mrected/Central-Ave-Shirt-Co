fabric.Object.prototype.getAngleInRadians = function(){
	alert(this.getAngle()/180*Math.PI);
}


var newShapePos = 0;
var canvas = new fabric.Canvas('testCanvas');
canvas.selection=true;//false disables group object selection

// var imgElement = document.getElementById("gwLogo");


var triangle = new fabric.Triangle({
	left:10,
	top:10,

	width:15,
	height:7
});

canvas.add(triangle);

var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: '#a3b1c8',
  width: 30,
  height: 30,
  angle:45,
  selectable:false
});


// "add" rectangle onto canvas


var rect2 = new fabric.Rect({
	left:100,
	top:300,
	fill:'#ffc627',
	width:300,
	height:10,
	angle:13
});

// canvas.add(rect2,rect);
// rect2.getAngleInRadians();
// rect.set({left:20, top:50});


// function changeState(){
// 	rect.set("fill","blue");
// 	rect2.set("fill","orange");
// 	rect.set({strokeWidth:5,stroke:"rgba(100,200,200,.5)"});
// 	rect2.set({strokeWidth:5,stroke:"rgba(200,100,100,.8)"});
// 	rect.set("angle",15).set("flipY",true);

// }	

function forceRender(){
	setInterval(function(){
		canvas.renderAll();
	},50);
}



$("#changeState").click(function(){
	rect.set("fill","blue");
	rect2.set("fill","orange");
	rect.set({strokeWidth:5,stroke:"rgba(100,200,200,.5)"});
	rect2.set({strokeWidth:1,stroke:"rgba(200,100,100,.8)"});
	rect2.set("angle",50).set("flipY",true);

	canvas.renderAll();
});

$("#addCircle").click(function(){
	newShapePos+=20;
	var circle = new fabric.Circle({
		radius:35,
		fill:"#e67e3c",
		top:250 + newShapePos,
		left:200 + newShapePos
	});
	canvas.add(circle);
	// canvas.renderAll();

})

function args(stuff){
	console.log(arguments);
}

args([1,2,3],4,5,6);

$("#unSelectable").click(function(){
	canvas.selection=false;
})

$("#addLogo").click(function(){
	fabric.Image.fromURL("images/gradyWhite.png", function(oImg){
		canvas.add(oImg);
	});
})

$("#blueShirt").click(function(){
	canvas.setBackgroundImage("images/blueShirt.jpg");
	forceRender();
});	


$("#redShirt").click(function(){
	canvas.setBackgroundImage("images/redShirt.png");
	canvas.renderAll();
});



document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
function KeyCheck(event)
{
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
      alert("backspace");
      break; 
      case 46:
      alert("delete");
      break;
      default:
      break;
   }
}

function onObjectSelected() {
  console.log(canvas.getActiveObject());
}
canvas.on('object:selected', onObjectSelected);








