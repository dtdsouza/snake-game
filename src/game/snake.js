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
    this.movePositionBasedOnDirection(this.headPosition);
    this.renderTail();
  };

  this.moveTail = () => {
    for (let i = this.tail.length - 1; i >= 0; i--) {
      if (i === 0) {
        this.tail[i] = createVector(this.headPosition.x, this.headPosition.y);
      } else {
        const previousTailPart = this.tail[i - 1];
        this.tail[i] = createVector(previousTailPart.x, previousTailPart.y);
      }
    }
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
    if (
      (this.direction.x !== 0 && xDirection !== 0) ||
      (this.direction.y !== 0 && yDirection !== 0)
    ) {
      return;
    }
    this.direction.x = xDirection;
    this.direction.y = yDirection;
  };

  this.eat = (food) => {
    this.tail.unshift(
      createVector(this.headPosition.x, this.headPosition.y).mult(
        this.gameScale
      )
    );
    food.spawn();
  };

  this.movePositionBasedOnDirection = (position) => {
    position.x += this.direction.x * this.gameScale;
    position.y += this.direction.y * this.gameScale;
  };

  this.renderTail = () => {
    fill(255);
    this.tail.forEach((tailPart) => {
      rect(tailPart.x, tailPart.y, this.gameScale, this.gameScale);
    });
  };
}
