let linea;

function setup() {
  createCanvas(windowWidth, windowHeight);
  linea = new BresenhamLine(0, 0, width, height);
}

function draw() {
  background(255);
  linea.draw();

}