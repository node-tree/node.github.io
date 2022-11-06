let img;
var button;        
var button2;
var button3;
var button4;
let scale;

function setup(){
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('sketch3');
  scale = width*0.08;
  // img = loadImage('./SVG/Asset8.svg'); 
  button = createImg('./SVG/Asset 9.svg');
  button2 = createImg('./SVG/Asset 12.svg');
  button3 = createImg('./SVG/Asset 13.svg');
  button4 = createImg('./SVG/Asset 10.svg');

  button5 = createImg('./SVG/Asset 13.svg');
  button6 = createImg('./SVG/Asset 9.svg');
  button7 = createImg('./SVG/Asset 10.svg');
  button8 = createImg('./SVG/Asset 9.svg');

  button9 = createImg('./SVG/Asset 13.svg');
  button10 = createImg('./SVG/Asset 10.svg');
  button11 = createImg('./SVG/Asset 9.svg');
  button12 = createImg('./SVG/Asset 12.svg');

  button13 = createImg('./SVG/Asset 10.svg');
  button14 = createImg('./SVG/Asset 13.svg');
  button15 = createImg('./SVG/Asset 12.svg');
  button16 = createImg('./SVG/Asset 9.svg');
}

function draw(){
  background(65,105,165);  
  button.position(width*0.25,height*0.3);
  button.size(scale,scale);
  button.mousePressed(gotolink);
  button2.position(width*0.38,height*0.3);
  button2.size(scale,scale);
  button2.mousePressed(gotolink2);
  button3.position(width*0.51,height*0.3);
  button3.size(scale,scale);
  button3.mousePressed(gotolink3);
  button4.position(width*0.64,height*0.3);
  button4.size(scale,scale);
  button4.mousePressed(gotolink4);

  button5.position(width*0.25,height*0.38);
  button5.size(scale,scale);
  button5.mousePressed(gotolink3);
  button6.position(width*0.38,height*0.38);
  button6.size(scale,scale);
  button6.mousePressed(gotolink);
  button7.position(width*0.51,height*0.38);
  button7.size(scale,scale);
  button7.mousePressed(gotolink4);
  button8.position(width*0.64,height*0.38);
  button8.size(scale,scale);
  button8.mousePressed(gotolink);

  button9.position(width*0.25,height*0.46);
  button9.size(scale,scale);
  button9.mousePressed(gotolink3);
  button10.position(width*0.38,height*0.46);
  button10.size(scale,scale);
  button10.mousePressed(gotolink4);
  button11.position(width*0.51,height*0.46);
  button11.size(scale,scale);
  button11.mousePressed(gotolink);
  button12.position(width*0.64,height*0.46);
  button12.size(scale,scale);
  button12.mousePressed(gotolink2);

  button13.position(width*0.25,height*0.54);
  button13.size(scale,scale);
  button13.mousePressed(gotolink4);
  button14.position(width*0.38,height*0.54);
  button14.size(scale,scale);
  button14.mousePressed(gotolink3);
  button15.position(width*0.51,height*0.54);
  button15.size(scale,scale);
  button15.mousePressed(gotolink2);
  button16.position(width*0.64,height*0.54);
  button16.size(scale,scale);
  button16.mousePressed(gotolink);

  // image(img,10,10,img.width*3,img.height*3);
}

function gotolink(){
  window.location.href = 'index5.html';
}
function gotolink2(){
  window.location.href = 'index4.html';
}
function gotolink3(){
  window.location.href = 'index8.html';
}
function gotolink4(){
  window.location.href = 'index6.html';
}                
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


