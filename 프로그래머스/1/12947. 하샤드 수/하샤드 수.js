function solution(x) {
    let sum = 0;
    let n = x;
    
    while(n > 0){
        sum += n % 10;
        n = Math.floor(n/10);
    }
    
    return Boolean(x%sum===0);
}