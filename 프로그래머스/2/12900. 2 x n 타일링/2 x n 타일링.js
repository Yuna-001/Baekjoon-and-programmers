function solution(n) {
    // n을 1과 2의 조합으로 나타낼 수 있는 경우의 수
    
    if(n===1) return 1;
    if(n===2) return 2;
    
    let f1 = 1, f2 = 2;
    let result;
    
    for(let i=3; i<=n; i++){
        result = f1 + f2;
        [f1,f2] = [f2 % 1000000007, result % 1000000007];
    }
    
    return result % 1000000007;
}