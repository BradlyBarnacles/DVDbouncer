function mod(a, n) {
  return (a % n) + (Math.sign(a) !== Math.sign(n) ? n : 0);
}

let img;
function preload() {
  img = loadImage("assets/dvdLogo.png");
}

function setup() {
  let c = createCanvas(400 + imgWidth, 400 + imgHeight);
  c.mousePressed(press);
  c.mouseReleased(release);

  colorMode(HSB, 255);
  tintColor = color(Math.random() * 255, 255, 255);
}

var isPlaying = false;
var tintColor;

const height = 400;
const width = 400;
var x = 0;
var y = 0;
var moveX = 0.5;
var moveY = 0.5;
const imgHeight = 37;
const imgWidth = 64;

function draw() {
  let speed = document.querySelector("#myRange").value / 2;
  if (isPlaying) {
    x = x + speed * moveX;
    y = y + speed * moveY;
  }

  if (x < 0 || x > height) {
    moveX = -moveX;
    x = (x > height ? 2 * height : 0) - x;
    tintColor = color(Math.random() * 255, 255, 255);
    CheckForNearHit()
  }
  if (y < 0 || y > width) {
    moveY = -moveY;
    y = (y > width ? 2 * width : 0) - y;
    tintColor = color(Math.random() * 255, 255, 255);
    CheckForNearHit()
  }

  background(30);
  tint(tintColor);
  image(img, x, y, 64, 37);
}


function CheckForNearHit() {
  let nextX = (moveX > 0 ? height - x : x) / Math.abs(moveX);
  let nextY = (moveY > 0 ? width - y : y) / Math.abs(moveY);
  if (Math.abs(nextX - nextY) < 10)
    document.querySelector("#myRange").value = 5;
}

function press() {
  t = 0;
  isPlaying = false;
  x = mouseX;
  y = mouseY;
}

function release() {
  isPlaying = true;

  let magnitude = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2));
  moveX = (x - mouseX) / magnitude;
  moveY = (y - mouseY) / magnitude;
}

