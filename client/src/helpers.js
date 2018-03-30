var getNextPieceState = (currNum) => {
  return currNum < 3 ? currNum + 1 : 0;
}

var movePieceLogic = (arr, where) => {
  var newCoord = [];
  arr.forEach((el, ind) => {
    var newPix = [];
    if (where === 'down') {
      newPix.push(el[0] + 1);
      newPix.push(el[1]);
    } else if ( where === 'left' ) {
      newPix.push(el[0]);
      newPix.push(el[1]-1);
    } else if ( where === 'right' ) {
      newPix.push(el[0]);
      newPix.push(el[1]+1);
    }
    newCoord.push(newPix);
  });
  return newCoord;
}

let rowShouldDisappear = (board) => {
  var arr = [];
  console.log(board)
  board.forEach((el, ind) => {
    console.log(el)
    if (el.reduce((acc, cell) => {
      if ( acc === false ) return false;
      return cell === 1;
    }, el[0]===1)) arr.push( ind );
  })
  return arr;
}

var getNewCoordAfterRotation = function(coord, ind, state) {
  var newCoord = [];
  if( ind === 4 ) {
    if ( state === 0 || state === 2){
      newCoord.push([coord[0][0]-1, coord[0][1]+1]);
      newCoord.push([coord[1][0],   coord[1][1]]);
      newCoord.push([coord[2][0]+1, coord[2][1]-1]);
      newCoord.push([coord[3][0]+2, coord[3][1]-2]);
    } else if ( state === 1 || state === 3) {    
      newCoord.push([coord[0][0] +1, coord[0][1]-1]);
      newCoord.push([coord[1][0]   , coord[1][1]]);
      newCoord.push([coord[2][0] -1, coord[2][1]+1]);
      newCoord.push([coord[3][0] -2, coord[3][1]+2]);
    }
  }
  if( ind === 5 ) {
      newCoord.push([coord[0][0], coord[0][1]]);
      newCoord.push([coord[1][0], coord[1][1]]);
      newCoord.push([coord[2][0], coord[2][1]]);
      newCoord.push([coord[3][0], coord[3][1]]);
  }
  if( ind === 6 ) {
    if ( state === 0 || state === 2){
      newCoord.push([coord[0][0],    coord[0][1]]);
      newCoord.push([coord[1][0],    coord[1][1]]);
      newCoord.push([coord[2][0]-2,  coord[2][1]+1]);
      newCoord.push([coord[3][0],    coord[3][1]+1]);
    } else if ( state === 1 || state === 3) {    
      newCoord.push([coord[0][0],    coord[0][1]]);
      newCoord.push([coord[1][0],    coord[1][1]]);
      newCoord.push([coord[2][0]+2,  coord[2][1]-1]);
      newCoord.push([coord[3][0],    coord[3][1]-1]);
    }
  }
  if( ind === 0 ) {
    if ( state === 0){
      newCoord.push([coord[0][0],    coord[0][1]]);
      newCoord.push([coord[1][0],    coord[1][1]+1]);
      newCoord.push([coord[2][0],    coord[2][1]+1]);
      newCoord.push([coord[3][0]+1,    coord[3][1]-1]);
    } else if ( state === 1) {  
      newCoord.push([coord[0][0]+1,    coord[0][1]-1]);
      newCoord.push([coord[1][0],    coord[1][1]]);
      newCoord.push([coord[2][0],    coord[2][1]]);
      newCoord.push([coord[3][0],    coord[3][1]]);
    }
    else if ( state === 2) {  
      newCoord.push([coord[0][0]-1,    coord[0][1]+1]);
      newCoord.push([coord[1][0],    coord[1][1]-1]);
      newCoord.push([coord[2][0],    coord[2][1]-1]);
      newCoord.push([coord[3][0],  coord[3][1]]);
    }
    else if ( state === 3) {  
      newCoord.push([coord[0][0],    coord[0][1]]);
      newCoord.push([coord[1][0],    coord[1][1]]);
      newCoord.push([coord[2][0],    coord[2][1]]);
      newCoord.push([coord[3][0]-1,    coord[3][1]+1]);
    }
  }
  if( ind === 1 ) {
    if ( state === 0){
      newCoord.push([coord[0][0]-1,    coord[0][1]]);
      newCoord.push([coord[1][0]-1,    coord[1][1]]);
      newCoord.push([coord[2][0],    coord[2][1]-1]);
      newCoord.push([coord[3][0],    coord[3][1]+1]);
    } else if ( state === 1) {
      newCoord.push([coord[0][0],    coord[0][1]+2]);
      newCoord.push([coord[1][0]+1,    coord[1][1]-1]);
      newCoord.push([coord[2][0],    coord[2][1]]);
      newCoord.push([coord[3][0]-1,    coord[3][1]+1]);
    }
    else if ( state === 2) {  
      newCoord.push([coord[0][0],    coord[0][1]-1]);
      newCoord.push([coord[1][0],    coord[1][1]+1]);
      newCoord.push([coord[2][0]+1,    coord[2][1]]);
      newCoord.push([coord[3][0]+1,    coord[3][1]]);
    }
    else if ( state === 3) {  
      newCoord.push([coord[0][0]+1,    coord[0][1]-1]);
      newCoord.push([coord[1][0],    coord[1][1]]);
      newCoord.push([coord[2][0]-1,    coord[2][1]+1]);
      newCoord.push([coord[3][0],    coord[3][1]-2]);
    }
  }
  if( ind === 2 ) {
    if ( state === 0){
      newCoord.push([coord[0][0]-1,    coord[0][1]+1]);
      newCoord.push([coord[1][0],    coord[1][1]]);
      newCoord.push([coord[2][0]+1,    coord[2][1]-2]);
      newCoord.push([coord[3][0],    coord[3][1]-1]);
    } else if ( state === 1) {
      newCoord.push([coord[0][0],    coord[0][1]-1]);
      newCoord.push([coord[1][0],    coord[1][1]-1]);
      newCoord.push([coord[2][0]-1,    coord[2][1]+1]);
      newCoord.push([coord[3][0]-1,    coord[3][1]+1]);
    }
    else if ( state === 2) {  
      newCoord.push([coord[0][0],    coord[0][1]+1]);
      newCoord.push([coord[1][0]-1,    coord[1][1]+2]);
      newCoord.push([coord[2][0],    coord[2][1]]);
      newCoord.push([coord[3][0]+1,    coord[3][1]-1]);
    }
    else if ( state === 3) {
      newCoord.push([coord[0][0]+1,    coord[0][1]-1]);
      newCoord.push([coord[1][0]+1,    coord[1][1]-1]);
      newCoord.push([coord[2][0],    coord[2][1]+1]);
      newCoord.push([coord[3][0],    coord[3][1]+1]);
    }
  }
  if( ind === 3 ) {
    if ( state === 0 || state === 2){
      newCoord.push([coord[0][0]-1,    coord[0][1]+2]);
      newCoord.push([coord[1][0],    coord[1][1]]);
      newCoord.push([coord[2][0]-1,  coord[2][1]+1]);
      newCoord.push([coord[3][0],    coord[3][1]-1]);
    } else if ( state === 1 || state === 3) {    
      newCoord.push([coord[0][0]+1,    coord[0][1]-2]);
      newCoord.push([coord[1][0],    coord[1][1]]);
      newCoord.push([coord[2][0]+1,  coord[2][1]-1]);
      newCoord.push([coord[3][0],    coord[3][1]+1]);
    }
  }
  return newCoord;
} 

let areCoordBeyondBorderes = (coord) =>{
  for ( var i = 0; i < coord.length; i++ ) {
    if ( coord[i][0] < 0 || coord[i][0] > 19 )return true;
    if ( coord[i][1] < 0 || coord[i][1] > 9)return true;

  }
  return false
}
 
let otherPiecesBlockingMove = (coord, board, oldCoord) => {
  var res = false;
  for ( var i = 0; i < coord.length; i++){
    if ( board[coord[i][0]][coord[i][1]] === 1 && !isInCurrCoord( coord[i], oldCoord ) ) {
        return true;
      }
  }
  return res;
}

let isInCurrCoord = (arr, currPieceCoord) => {
  var res = false;
  for ( var i = 0; i < currPieceCoord.length; i++){
    if ( currPieceCoord[i][0] === arr[0] &&
      currPieceCoord[i][1] === arr[1] ) {
        res = true;
        return true;
      }
  }
  return res;
}

export {getNextPieceState, 
  movePieceLogic, 
  rowShouldDisappear, 
  getNewCoordAfterRotation,
  areCoordBeyondBorderes,
  otherPiecesBlockingMove,
  isInCurrCoord
}