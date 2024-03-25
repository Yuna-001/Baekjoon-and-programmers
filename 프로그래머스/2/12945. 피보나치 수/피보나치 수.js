function solution(n) {
    let f1 = 0;
    let f2 = 1;

    for(let i=2; i<=n; i++){
        [f1,f2] = [f2, (f1 + f2)%1234567];
    }
    
    return f2;
}