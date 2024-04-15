let snake;
let gameBoard;
let resetButton;

function setup() {
  createCanvas(600, 600);
  frameRate(10);
  gameBoard = new GameBoard();
  snake = new Snake(gameBoard);
  resetButton = createButton("Reset");
  resetButton.hide();

  food = new Food(gameBoard);
}

function draw() {
  background(10);
  text(`Score: ${snake.score}`, 30, 30);

  food.render();
  snake.render();

  if (foodWithinReach(food, snake)) {
    snake.eat(food);
  }

  if (snake.checkDeath()) {
    gameOver();
  }
}

function gameOver() {
  text(`Game Over: ${snake.score}`, 250, 300);
  resetButton.show();
  resetButton.position(500, 600);
  resetButton.mousePressed(() => {
    snake.reset();
    food.spawn();
    resetButton.hide();
  });
}

function foodWithinReach(food, snake) {
  const distance = dist(
    food.position.x,
    food.position.y,
    snake.headPosition.x,
    snake.headPosition.y
  );

  return distance <= 10;
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
