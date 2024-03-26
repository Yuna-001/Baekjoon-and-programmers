function solution(brown, yellow) {
    const total = brown + yellow;
    let [x,y] = [3,3];
    
    while(true){
        if(total%y===0){
            x = total/y;
            if(x+y===brown/2+2) return [x,y];
        }
        
        y++;
    }
}