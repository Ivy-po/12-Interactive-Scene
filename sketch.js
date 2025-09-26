// Project Title
// Your Name(s) Ivanna
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
let lives = 3;

let pl;
let end;

let pX = 300;
let pY = 760;



function preload() {
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
  
  
  
  let x = 100;
 while (x <= 500){
  fill ('white')
  rect (x, 175, 100, 10);
  rect (x, 410, 100, 10);
  rect (x, 650, 100, 10);
  x += 200;
 }
  
 
 image(end, 0, 0, 600, 50, 0, 0, 600, 50)
  drawCar(xPos1, yPos1, 140, 'red'); //draws a car 1
  drawCar(xPos2, yPos2, 140, 'yellow'); //draws a car  2
  drawCar(xPos3, yPos3, 140, 'blue'); //draws a car 3
  xPos1 += 9 //makes car 1 move
  xPos2 -= 8 // makes car 2 move
  xPos3 += 7 // make car 3 move
  movePlayer();
  drawPlayer(pX, pY);



  if (pX >= 600 || pX <= 0) {
    pX = 300;
    pY = 760;
  }

  if (pY >= 800 || pY <= 0) {
    pX = 300;
    pY = 760;
  }


  textSize(15);
  text('level: ' + level, 10, 30)

  textSize(15);
  text('lives: ' + lives, 550, 30)

  if (lives <= 0) {
    level -= 1;
  }

  if (level <= 0) {
    background('white');
    text('duck died...', 300, 300);
  }

  if (pY <= 50) {
    level += 1;
    pX = 300;
    pY = 760;
  }

  if (level == 2) {
    xPos1 += 10;
    xPos2 -= 9;
    xPos3 += 8;
  }

  if (level == 3) {
    xPos1 += 11;
    xPos2 -= 10;
    xPos3 += 9;
  }

  if (level == 4) {
    xPos1 += 12;
    xPos2 -= 11;
    xPos3 += 10;
  }

  if (level == 5) {
    xPos1 += 13;
    xPos2 -= 12;
    xPos3 += 11;
  }

  if (abs(pX - xPos3) <= 90) {
    if (abs(pY - yPos3) <= 55) {
      background('red')
      pX = 300;
      pY = 760;
      lives -= 1;
    }
  }

  if (abs(pX - xPos2) <= 90) {
    if (abs(pY - yPos2) <= 55) {
      background('red')
      pX = 300;
      pY = 760;
      lives -= 1;
    }
  }

  if (abs(pX - xPos1) <= 90) {
    if (abs(pY - yPos1) <= 55) {
      background('red')
      pX = 300;
      pY = 760;
      lives -= 1;
    }
  }

  if (abs(pX - xPos4) <= 90) {
    if (abs(pY - yPos4) <= 55) {
      background('red')
      pX = 300;
      pY = 760;
      lives -= 1;
    }
  }

  if (xPos2 <= -70) {
    xPos2 = random(660, 900);
  }

  if (xPos1 >= 700) {
    xPos1 = random(-60, -400);
  }

  if (xPos3 >= 700) {
    xPos3 = random(-60, -400);
  }

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

