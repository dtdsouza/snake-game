function Snake(gameBoard) {
  position = new GameBoardPiece(gameBoard).getRandomPosition();
  gameScale = gameBoard.getGameScale();
  direction = createVector(0,0)

  this.render = () => {
    fill(255);
    rect(position.x, position.y, gameScale, gameScale);

    position.x += direction.x * gameScale
    position.y += direction.y * gameScale
  };

  this.setDirection = (xDirection, yDirection) => {
    direction.x = xDirection;
    direction.y = yDirection;
  };
}
