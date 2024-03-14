function solution(sizes) {
    let maxMin = 0;
    let maxMax = 0;
    
    sizes.forEach(([a,b])=>{
        const min = a < b ? a : b;
        const max = a > b ? a : b;
        if (max > maxMax) maxMax = max;
        if (min > maxMin) maxMin = min;
    })
    
    return maxMax*maxMin;
}