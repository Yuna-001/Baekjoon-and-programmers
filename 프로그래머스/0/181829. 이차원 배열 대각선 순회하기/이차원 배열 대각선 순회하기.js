function solution(board, k) {
    let result = 0;
    
    const min = Math.min(board.length-1,k);
    
    for(let i=0; i<=min; i++){
        for(let j=0; i+j<=k && j<board[i].length; j++){
            result += board[i][j];
        }
    }
    
    return result;
}