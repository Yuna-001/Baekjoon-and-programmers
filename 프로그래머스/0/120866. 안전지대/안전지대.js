function solution(board) {
    let count = 0;
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(isSafe(i,j,board)){
                count++;
            }
        }
    }
    
    return count;
}

function isSafe(row,col,board){
    const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]];
    
    for(const [dy,dx] of dirs){
        const [y,x] = [row+dy,col+dx];
        if(y>=0 && x>=0 && y<board.length && x<board[0].length && board[y][x]===1){
            return false;
        }
    }
    
    return true;
}