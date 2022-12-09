var s = function(p){
let score = 0;
let spr;
let player;
let sound;
let sound2;
let sound_bg;
p.setup = function(){
  p.createCanvas(p.windowWidth, p.windowHeight);
  sound_bg = p.createAudio('./kick_hihat.wav');
  sound2 = p.createAudio('./click.wav');
  sound = p.loadSound('bx-spring.mp3');
  player = new p.Sprite();
  sound_bg.loop();
  sound_bg.play();
  player.w = 50;
  player.h = 50;
  
  spr = new p.Group();
  spr.x = () => p.random(0,p.width);
  spr.y = () => p.random(0,p.height);
  for(let i = 0;i<10;i++){
    new spr.Sprite();
    spr[i].diameter =  p.random(30,60);
  }
  spr.amount = 10;
  player.overlaps(spr,p.collect);
}
p.collect = function(player,spr){
  spr.remove();
  score += 1;
  sound.play();
}
p.draw = function(){
  p.clear();
  p.background(50);
  p.fill(255);
  p.noStroke();
  p.textSize(72);
  p.textAlign(p.CENTER, p.CENTER);

  player.moveTowards(p.mouse.x,p.mouse.y)
  
  
  if (score < 10) {
    p.text(score, p.width/2, p.height/2);
  }
  else {
    p.text("NEXT!", p.width/2, p.height/2);
    player.text = "Click"
    player.textSize = 20;
    if(player.mouse.pressing()){
      sound2.play();
      window.location.href = 'index3.html';
    };
  }
}

}
var myp5 = new p5(s,'c2');