function GameBoardPiece(gameBoard) {
  this.getRandomPosition = () => {
    const gameBoardScale = gameBoard.getGameScale();
    const cols = width / gameBoardScale - 1;
    const rows = height / gameBoardScale - 1;

    return createVector(floor(random(cols)), floor(random(rows))).mult(
      gameBoardScale
    );
  };
}
