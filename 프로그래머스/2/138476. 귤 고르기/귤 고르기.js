function solution(k, tangerine) {
    const counts = new Map();
    
    tangerine.forEach(size => {
        counts.set(size, (counts.get(size) || 0) + 1);
    })
    
    const sizes = [...new Set(tangerine)]
    sizes.sort((a,b)=>counts.get(b)-counts.get(a));
    
    let result = 0;
    
    for(const size of sizes){
        k -= counts.get(size);
        result++;
        if(k <= 0) break;
    }
    
    return result;
}