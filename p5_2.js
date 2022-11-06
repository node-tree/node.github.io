let img;
var button;        
let ball = [];
let scale = 300;

function setup(){
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('sketch2');
  
  button = createImg('./SVG/text1.svg');

  for(let i = 0;i<100;i++){
  ball.push(new Ball());
  }
}

function draw(){
  background(65,105,165);
  
  button.position(width*0.4,height*0.3);
  button.size(scale,scale);
  button.mousePressed(gotolink);
  button.mouseOver(change);
  button.mouseOut(origin);
  
  
  for(let i = 0;i<100;i++){
  ball[i].move();
  ball[i].display();
  }
}

function gotolink(){
  window.location.href = 'index3.html';
}                
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function change(){
  scale = 330;
}
function origin(){
scale = 300;
}

class Ball{
  constructor(){
    this.x = random(width);
    this.y = random(height,height-200);
    this.diameter = random(10,100);
    this.speed = 1;
    

  }
  move(){
    this.x+=random(-this.speed,this.speed);
    this.y+=random(-this.speed,this.speed);
    if(this.x>(width-(this.diameter/2))||this.x<(this.diameter/2)){
      this.speedX*=-1;
    };
    if(this.y>height||this.y<0){
      this.speedY*=-1;
    };
  }
  display(){
    fill(255,255,23);
    noStroke();
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }
}

        