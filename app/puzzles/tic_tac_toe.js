
class TicTacToe {
  static hasHorizontal(board, piece, size=3){
    for(let i=0; i<size; i++){
      let match = true;
      for(let j=0; j<size; j++){
        match = match && board[i*size + j] === piece;
        if(!match){ break; }
      }
      if(match){ return true; }
    }
    return false;
  }

  static hasVertical(board, piece, size=3){
    for(let i=0; i<size; i++){
      let match = true;
      for(let j=0; j<size; j++){
        match = match && board[i + j*size] === piece;
        if(!match){ break; }
      }
      if(match){ return true; }
    }
    return false;
  }

  static hasDiagonal(board, piece, size=3){
    let match = true;           // NW to SE diagonal
    for(let i=0; i<size; i++){
      match = match && board[i*size + i] === piece;
      if(!match){ break; }
    }
    if(match){ return true; }

    match = true;              // NE to SW diagonal
    for(let i=1; i<=size; i++){
      match = match && board[i*size - i] === piece;
      if(!match){ break; }
    }
    if(match){ return true; }

    return false;
  }

  /** check if board has a winner.
   *
   * @param board, 9 elements array to represent 3x3 board. 'x' or 'o' or null.
   * @param piece, 'x' or 'o'
   * @return true or false
   */
  static hasWinner(board, piece){
    let size = Math.sqrt(board.length);

    return this.hasHorizontal(board, piece, size) ||
           this.hasVertical(board, piece, size) ||
           this.hasDiagonal(board, piece, size);
  }


}

export default TicTacToe;
