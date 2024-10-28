function solution(x) {
    let sum = 0;
    
    for(let n=x; n>0; n=Math.floor(n/10)){
        sum += n % 10;
    }
    
    return x % sum === 0;
}