
function setup(){
  var canvas = createCanvas(windowWidth,windowHeight*0.5);
  canvas.parent('sketch7');
  background(255);
}
function draw(){
  stroke(0);
  fill(255)
  circle(mouseX,mouseY,100,100);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
