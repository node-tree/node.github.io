let message = '색채',
  font,
  bounds, // 텍스트의 바운딩 박스에 대한 x, y, w, h값
  fontsize = 60,
  x,
  y; // 텍스트의 x 와 y 좌표

function preload() {
  font = loadFont('DungGeunMo.ttf');
}

function setup() {
  var canvas = createCanvas(windowWidth,windowHeight*0.34);
  canvas.parent('sketch7');
  

  // 폰트 설정
  textFont(font);
  textSize(fontsize);

  // 초기화시 중앙 정렬을 위해 텍스트의 너비 및 높이값 받아오기
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  background(65,105,165);  

  // 텍스트를 검정색으로 쓰고, 그 바운딩 박스 받아오기
  fill(0);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // 마우스가 바운딩 박스 안에 있는지 확인하고, 안에 있다면 간질간질!
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}
