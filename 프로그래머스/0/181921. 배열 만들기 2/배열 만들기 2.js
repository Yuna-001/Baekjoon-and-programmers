function solution(l, r) {
    const result = [];
    
    function makeNum(len,numStr){
        if(+numStr > r) return;
        
        if(+numStr >= l) result.push(+numStr);
        
        if(numStr) makeNum(len+1,numStr+"0");
        makeNum(len+1,numStr+"5");
    }
    
    makeNum(0,"");
    
    return result.length ? result.sort((a,b)=> a-b) : [-1];
}