
let img;
var button;
let balls = [];
let scale = 300;
let sound_bg;
let sound;

function setup(){
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('sketch');
  sound = createAudio('./click.wav');
  sound_bg = createAudio('./kick.wav');
  img = loadImage('./SVG/text1.png');
  button = new Button(100,0,img);
  
  sound_bg.play();
  
  for (i = 0; i < 30; i++) {
    balls.push(new Ball(
      createVector(width/2,height/2),
      p5.Vector.random2D().mult(random(10)),
      random(10,50),
      color(255,255,23)
      
    ));
  }
}

function draw(){
  background(65,105,165);
  sound_bg.loop();
  for(let i = 0; i < balls.length; i++) {
    for(let j = 0; j < i; j++) {
      balls[i].collide(balls[j]);
    }
  }
  
  for(let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].render();
  }
  button.display();
}

function gotolink(){
  window.location.href = 'index2.html';
}                

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


class Ball {
  constructor(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }
  collide(other) {
    if (other == this) {
      return;
    }
    let relative = p5.Vector.sub(other.pos, this.pos);
    let dist = relative.mag() - (this.radius + other.radius);
    if (dist < 0) {
      let movement = relative.copy().setMag(abs(dist/2));
      this.pos.sub(movement);
      other.pos.add(movement);
      
      let thisToOtherNormal = relative.copy().normalize();
      let approachSpeed = this.vel.dot(thisToOtherNormal) + -other.vel.dot(thisToOtherNormal);
      let approachVector = thisToOtherNormal.copy().setMag(approachSpeed);
      this.vel.sub(approachVector);
      other.vel.add(approachVector);
    }
  }
  move() {
    this.vel.y += 0.1;
    this.pos.add(this.vel);
    if (this.pos.x < this.radius) {
      this.pos.x = this.radius;
      this.vel.x = -this.vel.x;
    }
    if (this.pos.x > width-this.radius) {
      this.pos.x = width-this.radius;
      this.vel.x = -this.vel.x;
    }
    if (this.pos.y < this.radius) {
      this.pos.y = this.radius;
      this.vel.y = -this.vel.y;
    }
    if (this.pos.y > height-this.radius) {
      this.pos.y = height-this.radius;
      this.vel.y = -this.vel.y;
    }
  }
  render() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.radius*2);
  }
}

class Button {
  
  constructor(inX, inY, inImg) {
    this.x = inX;
    this.y = inY;
    this.img = inImg;
  }
  
  display() {
    stroke(0);
    
    // tint the image on mouse hover
    if (this.over()) {
      tint(204, 0, 128);
      sound.play();
    } else {
      noTint();
    }
    if(this.click()){
      window.location.href = 'index2.html';
    }
    
    
    image(this.img, this.x, this.y);
  }
  
    
  // over automatically matches the width & height of the image read from the file
  // see this.img.width and this.img.height below
  over() {
    if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height) {
      return true;
    } else {
      return false;
    }
  }
  click(){
      if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height && mouseIsPressed === true) {
        return true;
      } else {
        return false;
      }
    }
  
}