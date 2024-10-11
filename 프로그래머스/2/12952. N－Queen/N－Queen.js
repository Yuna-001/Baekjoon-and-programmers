function solution(n) {
    let count = 0;
    const board = Array.from({length:n},()=>new Array(n).fill(0));
    
    function isPossible(row,col){
        // 가로
        if(board[row].some(v => v === 1)) return false;
        
        // 세로
        for(let i=0; i<n; i++){
            if(board[i][col] === 1) return false;
        }
        
        // 위쪽 대각선
        for(let i=0; i<row; i++){
            const gap = Math.abs(i-row);
            
            // 왼쪽 위
            if(col-gap >= 0 && board[i][col-gap]) return false
            // 오른쪽 위
            if(col + gap < n && board[i][col+gap]) return false
        }
        
        //아래쪽 대각선
        for(let i=row+1; i<n; i++){
            const gap = Math.abs(i-row);
            
            // 왼쪽 아래
            if(col-gap >= 0 && board[i][col-gap]) return false
            // 오른쪽 아래
            if(col + gap < n && board[i][col+gap]) return false
        }
        
        return true;
    }
    
    function findPosition(row){
        for(let col=0; col<n; col++){
            if(isPossible(row,col)){
                if(row === n-1){
                    count++;
                }else{
                    board[row][col] = 1;
                    findPosition(row+1);
                    board[row][col] = 0;
                }
            }
        }
    }
    
    findPosition(0)
    
    return count;
}