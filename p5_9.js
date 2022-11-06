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
  img = loadImage('./SVG/p9_1.svg');
  pos1Y = 100;
  pos2Y = 100;
}

function draw(){
  background(255);
  


  beginShape();
  fill(255,255,23);
  vertex(width*0.1,250);
  vertex(width*0.12,100);
  vertex(width*0.4,100);
  vertex(width*0.42,250);
  vertex(width*0.42,800);
  vertex(width*0.1,800);
  vertex(width*0.1,250);
  endShape();


  stroke(0);
  fill(255,255,23); 
  
  rect(width*0.5, pos1Y, 300, 700);
  rect(width*0.7, pos2Y, 300, 700);
  circle(width*0.575,200,150,150);
  circle(width*0.775,200,150,150);
  circle(width*0.673,600,150,150);
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
