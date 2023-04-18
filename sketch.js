let rect1;
let rect2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  rect1 = new BresenhamRect(width/2 - 50, height/2 - 50, 100, 100);
  rect2 = new BresenhamRect(mouseX, mouseY, 100, 100);

  stroke(0,0,255);
  rect1.draw();
  stroke(255,0,0);
  rect2.draw();

}