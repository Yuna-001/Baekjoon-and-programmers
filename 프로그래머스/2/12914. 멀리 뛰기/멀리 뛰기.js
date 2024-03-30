function solution(n) {
    let f1=1,f2=2;
    let result = n;
    
    for(let i=3; i<=n; i++){
        result = f1 + f2;
        [f1,f2] = [f2%1234567,result%1234567];
    }
    
    return result%1234567;
}
