var t = function(p){
  let message = '1.긴막대를 눌러 음악을 완성하세요!',
  message2 = '2.마음에 드는 모양이 있나요?',
  font,
  bounds, // 텍스트의 바운딩 박스에 대한 x, y, w, h값
  fontsize = 30,
  x = 100,
  y = 1000,y2 = 1040; // 텍스트의 x 와 y 좌표
  let player;
  let sprs = [];
  let sprs2 = [];
  let sprs3 = [];
  let sprs4 = [];
  let sound = [];
  let sound_bg;
  let click_sound;

p.preload = function() {
    font = p.loadFont('DungGeunMo.ttf');
}

p.setup = function() {
  p.createCanvas(p.windowWidth, p.windowHeight); 
  click_sound = p.createAudio('/click.wav');
  sound_bg = p.createAudio('./kick_hihat_clab.wav');
  sound[0] = p.loadSound('cord1.wav');
  sound[1] = p.loadSound('cord2.wav');
  sound[2] = p.loadSound('cord3.wav');
  sound[3] = p.loadSound('cord4.wav');
  player = new p.Sprite();
  player.d = 10;
  player.x = p.width*0.5;
  player.y = 100;
  sound_bg.loop();
  sound_bg.play();

  p.textFont(font);
  p.textSize(fontsize);

  for(let i = 0;i<4;i++){
    sprs3[i] = new p.Sprite([[100,100],[200,100],[200,140],[180,150],[120,150],[100,140],[100,100]],'static');
    sprs3[i].p.noStroke();
    sprs3[i].color = p.color(255,255,23); 
    sprs3[i].rotation = p.random(-10,10);
    sprs3[i].x = p.random(100,p.width-100);
    sprs3[i].y = p.random(100,p.height-300);
  
    sprs[i] = new p.Sprite();
    sprs[i].collider = 'static';
    sprs[i].w = 100;
    sprs[i].h = 50;
    sprs[i].color = p.color(255,255,23);
    sprs[i].rotation = p.random(-10,10);
    sprs[i].x = p.random(100,p.width-100);
    sprs[i].y = p.random(100,p.height-300);
    sprs2[i] = new p.Sprite([[400,410],[420,400],[480,400],[500,410],[500,440],[480,450],[420,450],[400,440],[400,410]],'static');
      sprs2[i].p.noStroke();
      sprs2[i].color = p.color(255,255,23);
      sprs2[i].x = p.random(100,p.width-100);
      sprs2[i].y = p.random(100,p.height-300);
      sprs2[i].rotation = p.random(-10,10);

      sprs4[i] = new p.Sprite([[600,410],[620,400],[680,400],[700,410],[700,450],[600,450],[600,410]],'static');
      sprs4[i].p.noStroke();
      sprs4[i].color = p.color(255,255,23);
      sprs4[i].x = p.random(100,p.width-100);
      sprs4[i].y = p.random(100,p.height-300);
      sprs4[i].rotation = p.random(-10,10);
  }
  
 
  p.world.gravity.y = 10;
}

p.draw = function() {
  p.clear();
  p.background(65,105,165);
  p.fill(255);
  p.text(message, x, y);
  p.text(message2, x, y2);
  
  if(p.kb.presses(' ')){
    player = new p.Sprite();
    player.d = p.random(30,50);
    player.x = p.mouseX;
    player.y = p.mouseY;
    player.direction = 90;
    player.speed = 2;
  }
  for(let i = 0;i<4;i++){
  if (player.collides(sprs[i])) {
    sound[0].play();
  }
  if (player.collides(sprs2[i])) {
    sound[1].play();
  }
  if (player.collides(sprs3[i])) {
    sound[2].play();
  }
  if (player.collides(sprs4[i])) {
    sound[3].play();
  }

  if (p.mouse.x > sprs[i].x && p.mouse.x < sprs[i].x + sprs[i].width && p.mouse.y > sprs[i].y && p.mouse.y < sprs[i].y + sprs[i].height && p.mouse.pressing()) {
    click_sound.play();
    window.location.href = 'index4.html';
  }
  if (p.mouse.x > sprs2[i].x && p.mouse.x < sprs2[i].x + sprs2[i].width && p.mouse.y > sprs2[i].y && p.mouse.y < sprs2[i].y + sprs2[i].height && p.mouse.pressing()) {
    click_sound.play();
    window.location.href = 'index5.html';
  }
  if (p.mouse.x > sprs3[i].x && p.mouse.x < sprs3[i].x + sprs3[i].width && p.mouse.y > sprs3[i].y && p.mouse.y < sprs3[i].y + sprs3[i].height && p.mouse.pressing()) {
    click_sound.play();
    window.location.href = 'index6.html';
  }
  if (p.mouse.x > sprs4[i].x && p.mouse.x < sprs4[i].x + sprs4[i].width && p.mouse.y > sprs4[i].y && p.mouse.y < sprs4[i].y + sprs4[i].height && p.mouse.pressing()) {
    click_sound.play();
    window.location.href = 'index7.html';
  }
}

}

}
var myp5 = new p5(t,'c1');
