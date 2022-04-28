var x = [""];
var y;
function setup() {
  createCanvas(400,400);
  background(189, 237, 255);

}

function draw() {
  y = random (x.length);
  y = floor (y);
  for (let i=0; i < x.length; i++){
    fill(187, 150, 255,50);
    stroke(187, 150, 255);
    rect(random(width), random(height), random(20,20), random(20,20));
    translate(400 - 250, 400 + 50);
    rotate(PI / 3.0);
    rect(-random(width), -random(height), random(10,20), random(40,20));
    scale(2);
    fill(255, 189, 240,50);
    stroke(255, 189, 240);
    rect(-random(width), -random(height), random(20,20), random(20,20));
  }
}