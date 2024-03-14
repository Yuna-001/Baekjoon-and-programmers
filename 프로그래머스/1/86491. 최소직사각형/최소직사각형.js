function solution(sizes) {
    let maxMin = 0;
    let maxMax = 0;
    
    sizes.forEach(([a,b])=>{
        const [min,max] = a < b ? [a,b] : [b,a];
        if (max > maxMax) maxMax = max;
        if (min > maxMin) maxMin = min;
    })
    
    return maxMax*maxMin;
}