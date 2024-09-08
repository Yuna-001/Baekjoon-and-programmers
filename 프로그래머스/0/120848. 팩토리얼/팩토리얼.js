function solution(n) {
    let result = 1;
    
    for(let i=2;;i++){
        result *= i;
        if(result > n) return i-1;
    }
}