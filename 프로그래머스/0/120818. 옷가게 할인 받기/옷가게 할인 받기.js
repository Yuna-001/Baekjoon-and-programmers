function solution(price) {
    let discount_percent = 0;
    
    if(price >= 500000){
        discount_percent = 0.2;
    }else if(price >= 300000){
        discount_percent = 0.1;
    }else if(price >= 100000){
        discount_percent = 0.05;
    }
    
    return Math.floor(price*(1-discount_percent));
}