function Food(gameBoard) {
  this.gameBoardPiece = new GameBoardPiece(gameBoard);
  this.position = this.gameBoardPiece.getRandomPosition();
  this.gameScale = gameBoard.getGameScale();

  this.render = () => {
    fill(255, 0, 0);
    rect(this.position.x, this.position.y, this.gameScale, this.gameScale);
  };

  this.spawn = () => {
    this.position = this.gameBoardPiece.getRandomPosition();
  };
}
