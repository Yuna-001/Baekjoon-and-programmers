function solution(n) {
    let result = "";
    
    while(n > 0){
        result = [1,2,4][(n-1)%3] + result;
        n = Math.floor((n-1)/3);
    }
    
    return result;
}