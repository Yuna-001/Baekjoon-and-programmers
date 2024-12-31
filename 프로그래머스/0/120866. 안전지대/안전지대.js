function solution(board) {
    return board.reduce((total,row,i)=>total+row.filter((_,j) => isSafe(i,j,board)).length,0);
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