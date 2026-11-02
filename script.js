// (for reviewer) use up aroow to shoot and hold it down for a bit when you do. otherwise it may not hit the enemy. us left and right arrow to move and press start button to restart game if you destroyed all enemies. your goal is to shoot all the enemies. have fun!



// this is the variables for the character, enemies, and the bullet you shoot and other stuff here.

let enemyXs = 50;
let playerX = 180;
let playerY = 320;
let bulletY = 320;
let bulletX = 220;
let enemyY = 20;
let enemyX = [];
let enemy = 50;
let enemyOrigin = 0;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 5; i++) {
    enemyX.push(random(30, 370));
  }

  resetGame();
}

function draw() {
  // background and player controls here along with collision and enemy spawning
  background(220);
  if (keyIsDown(RIGHT_ARROW)) {
    playerX = playerX + 5;
  }
  if (keyIsDown(UP_ARROW)) {
    bulletY = bulletY - 60;
  } else {
    bulletY = playerY;
    bulletX = playerX + 13;
  }
  if (keyIsDown(UP_ARROW)) {
    rect(bulletX, bulletY, 10, 20);
  }

  if (keyIsDown(LEFT_ARROW)) {
    playerX = playerX - 5;
  }

  rect(playerX + 10, playerY - 20, 10, 20);
  square(playerX, playerY, 30);

  for (let i = 0; i < 5; i++) {
    rect(enemyX[i], 20, 20, 10);
  }
  for (let i = 0; i < enemyX.length; i++) {
    if (
      bulletX > enemyX[i] &&
      bulletX < enemyX[i] + 20 &&
      bulletY > 0 &&
      bulletY < 50
    ) {
      enemyX[i] = -1000;
    }
  }
}
// this is for the random enemy spawnpoints when you restart game. 
function resetGame() {
  enemyOrigin = random(30, 60);

  for (let i = 0; i < 5; i++) {
    enemyPos = enemyOrigin + 30 * i;
    enemyX.push(enemyXs);
  }
}
