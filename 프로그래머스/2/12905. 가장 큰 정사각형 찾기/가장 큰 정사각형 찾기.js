function solution(board){
    const m = board.length;
    const n = board[0].length;
    const dp = Array.from({length:m+1},()=> new Array(n+1).fill(0));
    let max = 0;
    
    for(let row=1; row<=m; row++){
        for(let col=1; col<=n; col++){
            if(board[row-1][col-1] === 1){
                dp[row][col] = Math.min(dp[row-1][col], dp[row][col-1], dp[row-1][col-1]) + 1;
                max = Math.max(max, dp[row][col]);
            }
        }
    }
    
    return max*max;
}