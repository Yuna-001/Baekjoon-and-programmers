function solution(weights) {
    let result = 0;
    const cases = new Map();
    
    weights.sort((a,b)=>a-b);
    
    for(const weight of weights){
        result += (cases.get(weight) || 0);
        
        for(const n of [1,2,1.5,4/3]){
            cases.set(weight*n, (cases.get(weight*n) || 0) + 1);
        }
    }
    
    return result;
}