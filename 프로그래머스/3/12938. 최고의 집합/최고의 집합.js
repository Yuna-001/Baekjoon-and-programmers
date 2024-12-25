function solution(n, s) {
    if(n > s) return [-1];
    
    let result = [];
    
    for(let i=0; i<n; i++){
        const element = Math.floor(s/(n-i),10);
        result[i] = element;
        s -= element;
    }
    
    return result;
}