let xspeed;
let yspeed;
let x, y;

function setup() {
  //createCanvas(400, 400);
  x = 100;
  y = 100;
  xspeed = 4;
  yspeed = 3;
  //background(0);
}

function draw() {
  createCanvas(400, 400);
  background(255);
  fill(200, 0, 150, 175);
  stroke(0, 0, 255);
  strokeWeight(3);
  rect(x, y, 50, 50);

  x = x + xspeed;
  y = y + yspeed;

  if (x + 50 > width || x == 0) {
    xspeed = xspeed * -1;
  }

  if (y + 50 > height || y < 0) {
    yspeed = yspeed * -1;
  }

}