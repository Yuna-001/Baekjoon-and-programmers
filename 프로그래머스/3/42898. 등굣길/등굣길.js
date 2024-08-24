function solution(m, n, puddles) {
    const dp = Array.from({length:n},()=>[]);
    
    puddles.forEach(([x,y])=>dp[y-1][x-1]=0);
    
    function countShortestPath(row,col){
        if(col >= m || row >= n) return 0;
        
        if(col === m-1 && row === n-1) return 1;
         
        if(dp[row][col] !== undefined) return dp[row][col]; 
        
        dp[row][col] = countShortestPath(row,col+1) + countShortestPath(row+1,col);
       
        return dp[row][col] % 1000000007;
    }
    
    return countShortestPath(0,0) % 1000000007;
}