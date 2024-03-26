function solution(k, tangerine) {
    const obj = {};
    
    tangerine.forEach((size) => obj[size] = (obj[size] || 0) + 1);
    tangerine.sort((a,b) => obj[b]-obj[a] || a-b);
    
    return new Set(tangerine.slice(0,k)).size;
}