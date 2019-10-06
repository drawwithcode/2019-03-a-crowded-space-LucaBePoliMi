/*var backOrbits = [];
var nBackOrbits = 30;*/

function preload(){

}



function setup() {
  createCanvas(windowWidth,windowHeight)

/*  for(var i = 0; i < nBackOrbits; i++) {

  var backOrbit = new OrbitSystem(random() * width, random() * height, 10, 8, 5, 1, 0);

  backOrbits.push(backOrbit);               DOESN'T WORK
}*/

}

var iterator = 0;

function draw() {

iterator++;

background(23, 26, 33);

for(i = 0; i < 200; i++) {
push();
noStroke();
fill(255, 255, 255);
circle(random() * width, random() * height, 2);
pop();

}
angleMode(DEGREES);


var orbit = new OrbitSystem(width/2, 300, 10, 20, 5, 1, 1);

orbit.float();
orbit.pulse(); // ATTENZIONE all'ordine in cui si chiamano i methods
orbit.display();


var orbitTwo = new OrbitSystem(width/4 , 4/5 * height, 50, 30, 10, 2, 0);

orbitTwo.display();


var orbitThree = new OrbitSystem(1/12 * width , 1/3 * height, 20, 15, 10, 1, 0);

orbitThree.floatVertical();
orbitThree.display();


var orbitFour = new OrbitSystem(3/4 * width , 2/3 * height, 40, 20, 10, 4, 1);

orbitFour.pulse();
orbitFour.display();


var orbitFive = new OrbitSystem(1/2 * width , 4/7 * height, 50, 20, 10, 4, 0);

orbitFive.floatHigh();
orbitFive.display();
}

function OrbitSystem(_x, _y, _circleDiameter, _orbitGap, _satelliteDiameter, _spinSpeed, _spinDirector) {

this.x = _x;
this.y = _y;
this.coreSize = _circleDiameter;
this.orbitGap = _orbitGap;
this.satelliteSize = _satelliteDiameter;
this.spinSpeed = _spinSpeed;
this.spinDirector = _spinDirector;

this.satelliteColor = color(244, 244, 244);
this.coreColor = color(0, 124, 240);





var orbitxFloat = cos(frameCount) * width/ 4;
var orbityFloat = sin(frameCount) * height/ 6;

  this.float = function() {

  this.x += orbitxFloat;
  this.y += orbityFloat;

}




var orbityFloatVertical = sin(frameCount) * height/ 6;

  this.floatVertical = function() {

  this.y += orbityFloatVertical;

}


var orbitxFloatHigh = cos(frameCount) * width/12;
var orbityFloatHigh = -sin(frameCount) * height/4;

  this.floatHigh = function() {

  this.x += orbitxFloatHigh;
  this.y += orbityFloatHigh;

}



var corePulse = noise(iterator/50) * 50;
var orbitPulse = noise(iterator/150) * 40;
var satellitePulse = noise(iterator/100) * 30;

this.pulse = function() {

this.coreSize += corePulse;
this.orbitGap += orbitPulse;
this.satelliteSize += satellitePulse;

}

var spinDirection = this.spinDirection;

this.display = function() {

  for(c = 0; c < 4; c++) {

push();
    fill(this.coreColor);
    noStroke();
      circle(this.x, this.y, this.coreSize);
pop();

  push();
  noFill();
  stroke(100, 100, 100);
  arc(this.x, this.y, this.coreSize + c * (this.orbitGap * 2), this.coreSize + c * (this.orbitGap * 2), 0, 360, OPEN);
  pop();



  if(this.spinDirector < 0.5) {
  spinDirection = -1;
  }

  if(this.spinDirector >= 0.5) {
  spinDirection = 1;
  }

  push();
  fill(this.satelliteColor);
  circle(this.x + cos((frameCount * (spinDirection * (c + this.spinSpeed))) + 90 * c) * (this.coreSize/2 + this.orbitGap + this.orbitGap * c), this.y + sin((frameCount * (c + this.spinSpeed)) + 90 * c) * (this.coreSize/2 + this.orbitGap + this.orbitGap * c), this.satelliteSize);
  pop();                                           //c acts as speed, spinSpeed makes it customizable



  }

}




}
