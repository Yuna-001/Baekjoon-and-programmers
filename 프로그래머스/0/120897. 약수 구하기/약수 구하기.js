function solution(n) {
    const result1 = [];
    const result2 = [];
    const sqrt = Math.sqrt(n);
    
    for(let i =1; i<sqrt; i++){
        if(n%i===0){
            result1.push(i);
            result2.push(n/i);
        }
    }
    
    if (Number.isInteger(sqrt)){
        result1.push(sqrt)
    }
    
    return [...result1, ...result2.reverse()]
}