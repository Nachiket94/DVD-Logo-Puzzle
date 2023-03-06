let xspeed;
let yspeed;
let x, y;
let img;
function setup() {
  img = loadImage('dvd-logo.jpg');
  createCanvas(600, 600);
  x = 100;
  y = 100;
  xspeed = 4;
  yspeed = 3;
}

function draw() {
  background(0);
  frameRate(50);
  // fill(200, 0, 150, 175);
  // stroke(0, 0, 255);
  // strokeWeight(2);
  // rect(x, y, 50, 50)
  image(img, x, y, 100 , 60);

  x = x + xspeed;
  y = y + yspeed;

  if (x + 100 > width || x == 0) {
    xspeed = xspeed * -1;
  }

  if (y + 60 > height || y < 0) {
    yspeed = yspeed * -1;
  }

}
