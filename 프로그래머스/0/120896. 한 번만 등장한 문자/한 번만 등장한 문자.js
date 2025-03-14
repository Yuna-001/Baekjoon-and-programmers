function solution(s) {
    const result = [];
    const alphabet = {};
    const notOne = {};
    
    for(const c of s){
        if(alphabet[c]) notOne[c]=true;
        else alphabet[c] = true;
    }
    
    for(const c of Object.keys(alphabet)){
        if(!notOne[c]) result.push(c);
    }
    
    return result.sort().join("");
}