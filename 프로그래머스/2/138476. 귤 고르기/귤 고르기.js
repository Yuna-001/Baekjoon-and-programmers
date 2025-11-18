function solution(k, tangerine) {
    const countMap = new Map();
    
    for(const item of tangerine){
        countMap.set(item, (countMap.get(item) || 0) + 1);
    }
    
    tangerine
        .sort((a,b)=>a-b)
        .sort((a,b)=>countMap.get(b)-countMap.get(a))
    
    return new Set(tangerine.slice(0,k)).size;
}