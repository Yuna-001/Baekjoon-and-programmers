function solution(array, commands) {
    const result = [];
    
    for(const [i,j,k] of commands){
        const n = array.slice(i-1,j).sort((a,b)=>a-b)[k-1];
        result.push(n);
    }
    
    return result;
}