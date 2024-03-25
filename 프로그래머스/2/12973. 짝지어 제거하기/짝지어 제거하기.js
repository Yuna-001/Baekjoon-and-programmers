function solution(s){
    const result = [];
    
    for(const c of s){
        if(c===result.at(-1)) result.pop();
        else result.push(c);
    }
    
    return result.length===0 ? 1 : 0;
}