function solution(s){
    let count = 0;
    
    for(const c of s){
        count += c ==="(" ? 1 : -1;
        if(count<0) return false;
    }
    
    return count === 0;
}