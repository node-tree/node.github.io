
function setup(){
  var canvas = createCanvas(windowWidth,windowHeight*0.53);
  canvas.parent('sketch3');
  
}

function draw(){
  background(65,105,165);  
  circle(100,100,100,100); 
}

                
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


