let img;
var button;        
let ball = [];


function setup(){
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('sketch3');
  img = loadImage('./SVG/Asset 6.svg');
  
  
}

function draw(){
  background(65,105,165);
  fill(255,255,23);
  rect(0,0,100,100);
  
}

function gotolink(){
  window.open('index4.html');
}                
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


