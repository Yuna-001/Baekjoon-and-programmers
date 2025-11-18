function solution(n, stations, w) {
    let count = 0;
    const range = w * 2 + 1;
    
    // 첫번째 기지국의 전파가 안 닿는 곳 범위
    const firstGap = stations[0] - w - 1
    
    if(firstGap >= 1){
        count += Math.ceil(firstGap/range);
    }
    
    
    for(let i=1; i<stations.length; i++){
        const cur = stations[i];
        const prev = stations[i-1];
        const gap = cur-prev-range;
        count += Math.ceil(gap/range);
    }
    
    const lastGap = n - (stations.at(-1) + w);
    
    if(lastGap >= 1){
        count += Math.ceil(lastGap/range);
    }
    

    return count;
}