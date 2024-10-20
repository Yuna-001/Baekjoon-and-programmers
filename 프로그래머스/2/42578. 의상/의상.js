function solution(clothes) {
    const types = {};
    
    clothes.forEach(([cloth,type]) => {
        types[type] = (types[type] || 0) + 1;  
    })
    
    let result = 1;
    
    for(const n of Object.values(types)){
        result *= (n + 1);
    }
    
    return result - 1;
}