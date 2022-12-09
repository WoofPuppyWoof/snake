var s;
var scl = 20;
var pressedKey = "RIGHT_ARROW";
var score = 0;

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function logScore() {
  score++;
  console.log('Score: '+score);
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(0); // originally 51

  if (s.eat(food)) {
    pickLocation();
    logScore();
  }
  s.death();
  s.update();
  s.show();

  fill(255, 0, 0); // originally (255, 0, 100)
  rect(food.x, food.y, scl, scl);
}





function keyPressed() {
  if (keyCode === UP_ARROW && pressedKey != "DOWN_ARROW") {
    s.dir(0, -1);
    pressedKey = "UP_ARROW";
  } else if (keyCode === DOWN_ARROW && pressedKey != "UP_ARROW") {
    s.dir(0, 1);
    pressedKey = "DOWN_ARROW";
  } else if (keyCode === RIGHT_ARROW && pressedKey != "LEFT_ARROW") {
    s.dir(1, 0);
    pressedKey = "RIGHT_ARROW";
  } else if (keyCode === LEFT_ARROW && pressedKey != "RIGHT_ARROW") {
    s.dir(-1, 0);
    pressedKey = "LEFT_ARROW";
  }
}



