function solution(s) {
    const result = [Infinity, -Infinity];
    
    s.split(" ").forEach(char => {
        const n = Number(char);
        if(n < result[0]) result[0] = n;
        if(n > result[1]) result[1] = n;
    })
    
    return result.join(" ");
}