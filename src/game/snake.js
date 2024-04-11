function Snake(gameBoard) {
  this.position = new GameBoardPiece(gameBoard).getRandomPosition();
  this.gameScale = gameBoard.getGameScale();
  this.direction = createVector(0, 0);

  this.render = () => {
    fill(255);
    rect(this.position.x, this.position.y, this.gameScale, this.gameScale);

    this.position.x += this.direction.x * this.gameScale;
    this.position.y += this.direction.y * this.gameScale;
  };

  this.setDirection = (xDirection, yDirection) => {
    this.direction.x = xDirection;
    this.direction.y = yDirection;
  };

  this.eat = (food) => {
    food.spawn();
  };
}
