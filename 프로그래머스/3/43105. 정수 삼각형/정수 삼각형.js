function solution(triangle) {
    const m = triangle.length;
    const dp = Array.from({length:m}, (_,i) => new Array(i+1).fill(0));
    
    for(let i=0; i<m; i++){
        dp[m-1][i] = triangle[m-1][i];
    }
    
    for(let i=m-2; i>=0; i--){
        for(let j=0; j<=i; j++){
            dp[i][j] = triangle[i][j] + Math.max(dp[i+1][j], dp[i+1][j+1]);
        }
    }
    
    return dp[0][0];
}