function solution(m, n, board) {
    let prevBoard = Array.from({length:n},()=>[]);
    
    for(let i=m-1; i>=0; i--){
        for(let j=0; j<n; j++){
            prevBoard[j].push(board[i][j]);
        }
    }
   
    let result = 0;
    let count;
    
    do{
        count=0;
        let newBoard = Array.from({length:n},()=>[]);
        for(let i=0; i<n; i++){
            prevBoard[i].forEach((el,j)=>{
                if(isInSquare(i,j,prevBoard)){
                    count++;
                }else{
                    newBoard[i].push(el);
                }
            })
        }
        result += count;
        prevBoard = newBoard;
    }while(count>0)
    
    
    return result;
}

function isInSquare(row,col,board){
    const squares = [
        [[-1,0],[-1,1],[0,1]],
        [[0,1],[1,1],[1,0]],
        [[1,0],[1,-1],[0,-1]],
        [[0,-1],[-1,-1],[-1,0]]
    ];
    const target = board[row][col];

    for(const square of squares){
        let count = 0;
        
        for(const [dy,dx] of square){
            if(isValid(row+dy,col+dx,board) && target === board[row+dy][col+dx]){
                count++;
            }
        }
        
        if(count === 3) return true;
    }
    
    return false;
}

function isValid(row,col,board){
    return row>=0 && col>=0 && row < board.length && col <board[row].length;
}