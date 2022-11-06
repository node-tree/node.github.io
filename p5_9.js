let img;
let pos1X;
let pos1Y;
let pos2X;
let pos2Y;
let pos3X;
let pos3Y;
let wh = 1;
function setup(){
  var canvas = createCanvas(windowWidth,3840);
  canvas.parent('sketch9');
  img = loadImage('/SVG/p9.svg');
  pos1Y = 100;
  pos2Y = 100;
}

function draw(){
  background(65,105,165);
  noStroke();
  fill(255,255,23); 

  rect(100, pos1Y, 300, 700);
  rect(500, pos2Y, 300, 700);
  if(width<550){
    pos2Y = 900;
    wh = 2;
  }else{
    pos2Y = 100;
    wh =1 ;
  }
}

function gotolink(){
  // window.open('index2.html');
  window.location.href = 'index2.html';
}                

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
