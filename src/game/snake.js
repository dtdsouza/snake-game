function Snake(gameBoard) {
  this.headPosition = new GameBoardPiece(gameBoard).getRandomPosition();
  this.gameScale = gameBoard.getGameScale();
  this.direction = createVector(0, 0);
  this.tail = [];

  this.render = () => {
    fill(200);

    this.crossBorder();
    rect(
      this.headPosition.x,
      this.headPosition.y,
      this.gameScale,
      this.gameScale
    );

    this.moveTail();
    this.renderTail();
    this.movePositionBasedOnDirection(this.headPosition);
  };

  this.moveTail = () => {
    // TODO: implement
  };

  this.crossBorder = () => {
    if (this.headPosition.x < 0) {
      return (this.headPosition.x = width);
    }
    if (this.headPosition.x > width - 1) {
      return (this.headPosition.x = 0);
    }
    if (this.headPosition.y < 0) {
      return (this.headPosition.y = height);
    }
    if (this.headPosition.y > height - 1) {
      return (this.headPosition.y = 0);
    }
  };

  this.setDirection = (xDirection, yDirection) => {
    this.direction.x = xDirection;
    this.direction.y = yDirection;
  };

  this.eat = (food) => {
    this.tail.unshift(createVector(this.headPosition.x, this.headPosition.y));
    food.spawn();
  };

  this.movePositionBasedOnDirection = (position) => {
    position.x += this.direction.x * this.gameScale;
    position.y += this.direction.y * this.gameScale;
  };

  this.movePositionBackwards = (position) => {
    position.x -= this.direction.x * this.gameScale;
    position.y -= this.direction.y * this.gameScale;
  };

  this.renderTail = () => {
    fill(255);
    this.tail.forEach((tailPart) => {
      rect(tailPart.x, tailPart.y, this.gameScale, this.gameScale);
    });
    aux = null;
  };
}
