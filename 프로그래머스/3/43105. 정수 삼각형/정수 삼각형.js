function solution(triangle) {
    const dp = Array.from({length:triangle.length},()=>[]);
    
    function findMaxSum(row,col){
        if(row===triangle.length-1) return triangle[row][col];
        
        if(dp[row][col] !== undefined) return dp[row][col];
        
        const sum1 = findMaxSum(row+1,col) + triangle[row][col];
        const sum2 = findMaxSum(row+1,col+1) + triangle[row][col];
        
        dp[row][col] = sum1 > sum2 ? sum1 : sum2;
        
        return dp[row][col];
    }
    
    return findMaxSum(0,0);
}