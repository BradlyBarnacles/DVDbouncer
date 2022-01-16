
let img;
function preload() {
  img = loadImage('assets/dvdLogo.png');
}

function setup() {
  createCanvas(400 + imgWidth, 400 + imgHeight);
  colorMode(HSB, 255);
  tintColor = color(Math.random()*255, 255, 255)
}

var t = 0;
var xLatticePoint = 0;
var yLatticePoint = 0;

var tintColor;
const height = 400;
const width = 400;
const startX = 20;
const startY = 30;
const gradient = 0.5;
const imgHeight = 37;
const imgWidth = 64;

function draw() {
  t++;
  let absX = startX + t * gradient;
  let absY = startY + (1 - gradient) * t;

  if (xLatticePoint !== Math.floor(absX / height)) {
    xLatticePoint = Math.floor(absX / height)
    tintColor = color(Math.random()*255, 255, 255)
  }
  if (yLatticePoint !== Math.floor(absY / width)) {
    yLatticePoint = Math.floor(absY / width)
    tintColor = color(Math.random()*255, 255, 255)
  }



  let relX = height - Math.abs(absX % (2 * height) - height)
  let relY = width - Math.abs(absY%(2*width)- width)
  
  background(30);
  tint(tintColor)
  image(img, relX, relY, 64, 37);
}
