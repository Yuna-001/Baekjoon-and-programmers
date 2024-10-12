function solution(k, tangerine) {
    let type = 0;
    const obj = {};
    
    tangerine.forEach(v => {
        obj[v] = (obj[v] || 0) + 1;
    })
    
    for(const [size, num] of Object.entries(obj).sort((a,b)=>b[1]-a[1])){
        type++;
        k-=num;
        
        if(k <= 0) break;
    }
    
    return type;
}