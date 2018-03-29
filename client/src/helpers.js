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
  board.forEach((el, ind) => {
    if (el.reduce((acc, cell) => {
      if ( acc === false ) return false;
      return cell === 1;
    }) ) {
      arr.push( ind );
    }
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
    console.log(state)
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
    console.log(state)
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
    console.log(state)
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

export {getNextPieceState, movePieceLogic, rowShouldDisappear, getNewCoordAfterRotation }