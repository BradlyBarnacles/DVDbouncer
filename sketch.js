function setup() {
  createCanvas(400, 400);
}

var t = 0;
const height = 400;
const width = 400;
const startX = 20;
const startY = 30;
const gradient = 0.5;

function draw() {
  t++;
  let absX = startX + t * gradient;
  let absY = startY + (1 - gradient) * t;

  let relX = height - Math.abs(absX % (2 * height) - height)
  let relY = width - Math.abs(absY%(2*width)- width)
  
  console.log(relX);
  background(220);
  circle(relX, relY, 5);
}
