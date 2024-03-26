function solution(brown, yellow) {
    const total = brown + yellow;
    const sqrt = Math.sqrt(total);
    let x = 3;
    
    for(let y=3; y<=sqrt; y++){
        if(total%y===0){
            x = total/y;
            if(x+y===(brown+4)/2) return [x,y];
        }
    }
}