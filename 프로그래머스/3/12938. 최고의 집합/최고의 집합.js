function solution(n, s) {
    let result = [];
    
    for(let i=0; i<n; i++){
        const num = parseInt(s/(n-i),10);
        
        if(num === 0) return [-1];
        
        result[i] = num;
        s -= num;
    }
    
    return result;
}