function solution(brown, yellow) {
    // brown = (가로+세로)*2-4
    // brown + yello = 가로*세로
    
    const sum = brown+yellow;
    const limit = Math.floor(Math.sqrt(sum));
    
    for(let h=3; h<=limit; h++){
        if(sum%h !==0) continue;
        
        const w = sum/h;
        if((h+w)===(brown+4)/2) return [w,h];
    }
}