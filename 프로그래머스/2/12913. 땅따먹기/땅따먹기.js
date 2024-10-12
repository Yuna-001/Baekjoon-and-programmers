function solution(land) {
    const m = land.length;
    const dp = Array.from({length:m},()=>new Array(4));
    
    for(let j=0; j<4; j++){
        dp[0][j] = land[0][j];
    }
    
    for(let i=1; i<m; i++){
        dp[i][0] = land[i][0] + Math.max(dp[i-1][1],dp[i-1][2],dp[i-1][3]);
        dp[i][1] = land[i][1] + Math.max(dp[i-1][0],dp[i-1][2],dp[i-1][3]); 
        dp[i][2] = land[i][2] + Math.max(dp[i-1][0],dp[i-1][1],dp[i-1][3]);
        dp[i][3] = land[i][3] + Math.max(dp[i-1][0],dp[i-1][1],dp[i-1][2]);
    }
    
    return Math.max(...dp[m-1]);
}