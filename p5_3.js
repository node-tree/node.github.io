let message = 'DCC',
  font,
  bounds, // 텍스트의 바운딩 박스에 대한 x, y, w, h값
  fontsize = 60,
  x,
  y; // 텍스트의 x 와 y 좌표
  let message2 = 'STORAGE',
  font2,
  bounds2, // 텍스트의 바운딩 박스에 대한 x, y, w, h값
  fontsize2 = 60,
  x2,
  y2; // 텍스트의 x 와 y 좌표

function preload() {
  font2 = loadFont('Copal Std Solid.otf');
  font = loadFont('Copal Std Solid.otf');
}
function setup(){
  var canvas = createCanvas(windowWidth,windowHeight*0.53);
  canvas.parent('sketch3');  
  textFont(font);
  textSize(fontsize);
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - 100;

  textFont(font2);
  textSize(fontsize2);
  bounds2 = font2.textBounds(message2, 0, 0, fontsize2);
  x2 = width / 2 - bounds2.w / 2;
  y2 = height / 2 - bounds2.h / 2;
}

function draw(){
  background(65,105,165);  
  // circle(100,100,100,100); 
  fill(255,255,23);
  
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);
  x+=1;
  if(x>windowWidth){
    x = -200;
  }

  text(message2, x2, y2);
  bounds2 = font2.textBounds(message2, x2, y2, fontsize2);
  x2-=1;
  if(x2<-500){
    x2 = windowWidth;
  }
}

                
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


