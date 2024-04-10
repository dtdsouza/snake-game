let snake;
let gameBoard;

function setup() {
  createCanvas(800, 800);
  frameRate(15);
  gameBoard = new GameBoard();
  snake = new Snake(gameBoard);
}

function draw() {
  background(100);
  snake.render();
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      return snake.setDirection(0, -1);
    case DOWN_ARROW:
      return snake.setDirection(0, 1);
    case RIGHT_ARROW:
      return snake.setDirection(1, 0);
    case LEFT_ARROW:
      return snake.setDirection(-1, 0);
  }
}

// Classes:
// - GameBoard
// - Snake
// - Food
// - ScoreBoard
