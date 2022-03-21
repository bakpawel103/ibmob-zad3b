var stage;
var SIZE = 100;
		
function init() {
  //resize canvas to full width and height
  var canvas = document.getElementsByTagName('canvas')[0];
  canvas.width = window.innerWidth*0.8;
  canvas.height = window.innerHeight;
  
  stage = new createjs.Stage("canvas");
  
  stage.update();
}

generateRectangle = () => {
  let x = getRandomArbitrary(0, canvas.width/3);
  let y = getRandomArbitrary(0, canvas.height/3);
  let fill = `#${Math.floor(Math.random()*16777215).toString(16)}`;

  var rectangle = new createjs.Shape();
  rectangle.graphics.beginFill(fill).drawRect(x, y, SIZE, SIZE);
  rectangle.x = x;
  rectangle.y = y;
  rectangle.name = "rectangle";
  rectangle.on("pressmove", drag);
  stage.addChild(rectangle);

  stage.update();
}

function drag(evt) {
  evt.target.x = evt.stageX;
  evt.target.y = evt.stageY;

  stage.update();   
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}