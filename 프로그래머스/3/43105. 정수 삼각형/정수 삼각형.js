function solution(triangle) {
    const length = triangle.length
    const dp = Array.from({length}, () => new Array());
    dp[0][0] = triangle[0][0];
    
    for(let i=1; i<length; i++){
        for(let j=0; j<triangle[i].length; j++){
            if(j === 0){
                dp[i][j] = triangle[i][j] + dp[i-1][j];
            } else if(j === triangle[i].length -1){
                dp[i][j] = triangle[i][j] + dp[i-1][j-1];
            } else{
                dp[i][j] = triangle[i][j] + Math.max(dp[i-1][j], dp[i-1][j-1]);
            }
        }
    }
    
    return Math.max(...dp[length-1]);
}