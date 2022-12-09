var t = function(p){
  let player;
  let star;
  let sound;
  let gif;
  let click_sound;
  let sound_bg;
  let sound_bg2;
p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight); 
    click_sound = p.createAudio('./click.wav');
    sound = p.loadSound('./rocket.wav');
    sound_bg2 = p.createAudio('./morse.wav'); ;
    sound_bg = p.createAudio('./kick_hihat_clab_rim_hi.wav');
    
    sound_bg2.play();
    sound_bg.play();
    
    gif = p.createImg('./SVG/index6.gif');
    
    star = new p.Sprite();
    star.collider = 'static';
    star.d = 50;
    star.y = 400;
    star.text = "지구인";
    star.textSize = 10;
    star.maxSpeed = 2;
    
    p.world.gravity.y = -5;
}

p.draw = function() {
  

  p.clear();
  sound_bg.loop();
  sound_bg2.loop();
  p.background(65,105,165);
  gif.position(500,400);
  gif.size(1920*0.5,1080*0.5);
  star.x = p.mouse.x;
  if(p.kb.presses(' ')){
    player = new p.Sprite();
    player.d = p.random(10,30);
    player.x = star.x;
    player.y = star.y-50;
    player.direction = 270;
    player.speed = p.random(3,10);
    sound.play();
  }
  if (p.mouse.x > gif.x && p.mouse.x < gif.x + gif.width && p.mouse.y > gif.y && p.mouse.y < gif.y + gif.height && p.mouse.pressing()) {
    p.tint(204, 0, 128);
    click_sound.play();
    window.location.href = 'index7.html';
  }
}

}
var myp5 = new p5(t,'c6');
