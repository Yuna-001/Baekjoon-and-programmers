function solution(gems) {
    const total = new Set(gems).size;
    const jewels = new Map();
    const result = [1, gems.length];
    
    for(let start=0,end=0; end < gems.length;){
        const gem = gems[end++];
        jewels.set(gem, (jewels.get(gem) || 0) + 1);
        
        if(jewels.size === total){
            while(jewels.get(gems[start]) > 1){
                jewels.set(gems[start], jewels.get(gems[start]) - 1);
                start++;
            }
            
            if(end-start-1 < result[1]-result[0]){
                result[1] = end;
                result[0] = start + 1;
            }
        }
    }
   
    return result;
}