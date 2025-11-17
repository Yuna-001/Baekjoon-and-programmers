function solution(brown, yellow) {
    // brown = (가로+세로)*2-4
    // brown + yello = 가로*세로
    
    const total = brown+yellow;
    
    for(let row=3; row<total; row++){
        if(total%row !==0) continue;
        
        const col = total/row;
        if((row+col)===(brown+4)/2) return [col,row];
    }
}