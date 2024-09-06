function solution(x) {
    let n = 0;
    
    for(const c of x.toString()){
        n += +c;
    }
    
    return Boolean(x%n===0);
}