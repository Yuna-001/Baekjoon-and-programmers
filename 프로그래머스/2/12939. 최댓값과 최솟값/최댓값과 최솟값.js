function solution(s) {
    let min = Infinity;
    let max = -Infinity;
    
    s.split(" ").forEach(c => {
        const n = Number(c);
        if(n > max) max = n;
        if(n < min) min = n;
    })
    
    return min + " " + max;
}