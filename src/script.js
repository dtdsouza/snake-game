let snake;
let gameBoard;

function setup() {
  createCanvas(800, 800);
  frameRate(15);
  gameBoard = new GameBoard();
  snake = new Snake(gameBoard);
  food = new Food(gameBoard);
}

function draw() {
  background(100);
  food.render();
  snake.render();
  
  if (foodWithinReach(food, snake)) {
    snake.eat(food);
  }
}

function foodWithinReach(food, snake) {
  const distance = dist(
    food.position.x,
    food.position.y,
    snake.headPosition.x,
    snake.headPosition.y
  );

  return distance <= 4;
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
