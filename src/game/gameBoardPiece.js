function GameBoardPiece(gameBoard) {
  this.getRandomPosition = () => {
    const gameBoardScale = gameBoard.getGameScale();
    const cols = width / gameBoardScale;
    const rows = height / gameBoardScale;

    return createVector(floor(random(cols)), floor(random(rows))).mult(
      gameBoardScale
    );
  };
}
