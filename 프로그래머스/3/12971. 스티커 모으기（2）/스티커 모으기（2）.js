function solution(sticker) {
    const n = sticker.length;
    
    if(n === 1) return sticker[0];
    
    const dp1 = new Array(n+1).fill(0); // 첫 번째를 방문한 경우
    const dp2 = new Array(n+1).fill(0);  // 첫 번째를 방문하지 않은 경우
    
    dp1[1] = sticker[0];
    dp1[2] = sticker[0];
    
    dp2[2] = sticker[1];
    
    for(let i=2; i<n-1; i++){
        dp1[i+1] = Math.max(dp1[i-1]+sticker[i], dp1[i]);
        dp2[i+1] = Math.max(dp2[i-1]+sticker[i], dp2[i]);
    }
    
    dp1[n] = dp1[n-1];
    dp2[n] = Math.max(dp2[n-2]+sticker[n-1], dp2[n-1]);

    return Math.max(dp1[n], dp2[n]);
}