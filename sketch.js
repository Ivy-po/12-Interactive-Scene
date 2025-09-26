// Project Title
// Your Name(s)
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let yPos1 = 170; //variables for positions of the cars to make them move
let xPos1 = -60;
let yPos2 = 410;
let xPos2 = 660;
let yPos3 = 645;
let xPos3 = -60;
let yPos4 = 645;
let xPos4 = -260;

let level = 1;
let livese = 3;

let pl;
let end;

let pX = 300;
let pY = 760;
 
function preload(){
end = loadImage('img/end.png')
pl = loadImage('img/player.png')
}
  
function setup() {
  //This function get run once at the start of the program
  createCanvas(600, 800);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Set the number of frames per second
  frameRate(30);
}

function draw() {
  background(100);
  noStroke();
  
  fill(100, 207, 66); // makes spaces created below green
  rect(300, 50, 600, 100); // green spaces for chicken to chill
  rect(300, 290, 600, 100);
  rect(300, 530, 600, 100);
  rect(300, 760, 600, 100);
  image(end, 0, 0, 600, 50, 0, 0, 600, 50)
  drawCar(xPos1, yPos1, 140, 'red'); //draws a car 1
  drawCar(xPos2, yPos2, 140, 'yellow'); //draws a car  2
  drawCar(xPos3, yPos3, 140, 'blue'); //draws a car 3
  xPos1 += 8 //makes car 1 move
  xPos2 -=7 // makes car 2 move
  xPos3 += 6 // make car 3 move
  movePlayer();
  drawPlayer(pX, pY);
  
  textSize(15);
  text('level: ' + level, 10, 30)

  if (pY <= 50){
    levle+=1
    pX = 300;
    pY = 760;
  }

   if (abs(pX - xPos3)<=90){
    if (abs(pY-yPos3)<=55){
      background('red')
      pX = 300;
      pY = 760;
    }
  }

   if (xPos2>= -70){
  xPos2 = random(5660, -400);
 }

  if (xPos1>= 700){
  xPos1 = random(-60, -400);
 }

 if (xPos3>= 700){
  xPos3 = random(-60, -400);
 }


  function drawPlayer(x, y) {
    image(pl, x, y, 40, 40, 0, 0, 40, 40)
    // fill('white');
    // rect(x, y, 40, 40);
  }

  function movePlayer() {
    if (keyIsDown(87)) { // w key
      pY -= 5;
    }
    if (keyIsDown(83)) { // s key
      pY += 5;
    }
    if (keyIsDown(65)) { // a key
      pX -= 5;
    }
    if (keyIsDown(68)) { // d key
      pX += 5;
    }
  }

  function drawCar(x, y, len, c) { //makes a car but doesnt draw it
    rectMode(CENTER);
    fill(c);
    rect(x, y, len, len / 2);
    fill('black');
    rect(x - len / 3, y + len / 3, len / 4, len / 8);
    rect(x + len / 3, y + len / 3, len / 4, len / 8);
    rect(x - len / 3, y - len / 3, len / 4, len / 8);
    rect(x + len / 3, y - len / 3, len / 4, len / 8);
  }

}