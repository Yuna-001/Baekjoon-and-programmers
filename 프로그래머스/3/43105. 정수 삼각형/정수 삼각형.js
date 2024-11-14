function solution(triangle) {
    const m = triangle.length;
    const dp = Array.from({length:m}, (_,i)=> new Array(i+1).fill(0));
    
    dp[0][0] = triangle[0][0];
    
    for(let i=1; i<m; i++){
        // 첫번째 열
        dp[i][0] = triangle[i][0] + dp[i-1][0];
        
        // 중간 열들
        for(let j=1; j<triangle[i].length-1; j++){
            dp[i][j] = triangle[i][j] + Math.max(dp[i-1][j-1], dp[i-1][j]);
        }
        
        // 마지막 열
        dp[i][i] = triangle[i][i] + dp[i-1][i-1];
    }
    
    return Math.max(...dp[m-1]);
}