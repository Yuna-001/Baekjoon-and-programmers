function solution(weights) {
    let result = 0;
    const map = new Map();
  
    weights.sort((a,b)=>b-a);
    
    for(const weight of weights){
        for(const n of [1,2,1.5,4/3]){
            if(map.get(n*weight)) result += map.get(n*weight);
        }
        map.set(weight, (map.get(weight) || 0 ) + 1);
    }
    
    return result;
}