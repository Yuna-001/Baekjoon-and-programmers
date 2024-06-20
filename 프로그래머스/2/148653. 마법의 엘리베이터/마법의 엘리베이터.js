function solution(storey) {
    let stone = 0;
    
    while(storey > 0){
        const n1 = storey % 10;
        const n2 = Math.trunc(storey / 10) % 10;
        
        if (n1 > 5 || (n1 === 5 && n2 >= 5)) {
            stone += 10 - n1;
            storey += 10 - n1;
        } else {
            stone += n1;
            storey -= n1;
        }
        
        storey /= 10;
    }
    
    return stone;  
}