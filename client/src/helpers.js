var handleKeyDown = (event) => {
  var keyCodes = {
    leftArrow: 37,
    upArrow:38,
    rightArrow: 39,
    downArrow: 40,
    space: 32
  }
  switch( event.keyCode ) {
    case keyCodes.downArrow:
      if ( this.canMove('down')){
        this.movePiece('down');
        clearInterval(this.interval);
        this.setInt();
        if ( this.isPieceDown() ) {
          this.handlePieceDown()
        }
      }
      break;
    case keyCodes.leftArrow:
      if ( this.canMove('left')){
        this.movePiece('left');
      }
      break;
    case keyCodes.rightArrow:
      if ( this.canMove('right')){
        this.movePiece('right');
      }
      break;
    case keyCodes.upArrow:
      this.rotate();
      break;
    default: 
      break;
  }
};

export { handleKeyDown }