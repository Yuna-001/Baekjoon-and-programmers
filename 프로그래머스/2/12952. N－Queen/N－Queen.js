function solution(n) {
    const board = Array.from({length: n}, () => new Array(n).fill(false));
    let count = 0;
    
    function isValid(row,col){
        // 같은 열 확인
        if(board.some(arr => arr[col] === true)) return false;
        
        // 대각선 확인
        for(let i=0; i<n; i++){
            if(i=== row) continue;
            
            const rowGap = Math.abs(row - i);
            if(board[i][col-rowGap] || board[i][col+rowGap]) return false;
        }
        
        return true;
    }
    
    function findPosition(row){
        if(row === n){
            count++;
            return;
        }
        
        for(let col=0; col<n; col++){ 
            if(isValid(row,col)){
                board[row][col] = true;
                findPosition(row+1);
                board[row][col] = false;
            }
        }
    }
    
    findPosition(0);
    
    return count;
}