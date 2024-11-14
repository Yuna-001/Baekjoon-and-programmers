function solution(money) {
    const N = money.length;
    const dp0 = new Array(N).fill(0);
    const dp1 = new Array(N).fill(0); 
    
    dp0[0] = money[0];
    dp0[1] = money[0];
    
    for(let i=2; i<N-1; i++){
        dp0[i] = Math.max(money[i] + dp0[i-2], dp0[i-1]);
    }
    
    dp1[1] = money[1];
    
    for(let i=2; i<N; i++){
        dp1[i] = Math.max(money[i] + dp1[i-2], dp1[i-1]);
    }
    
    return Math.max(dp0[N-2],dp1[N-1]);
}