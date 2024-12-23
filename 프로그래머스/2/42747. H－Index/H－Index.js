function solution(citations) {
    citations.sort((a,b)=>b-a);
    
    let max = 0;
    
    for(let i=0; i<citations.length; i++){
        const h = Math.min(i+1, citations[i]);
        
        if(max >= h) {
            return max;
        }
        
        max = h;
    }
    
    return max;
}