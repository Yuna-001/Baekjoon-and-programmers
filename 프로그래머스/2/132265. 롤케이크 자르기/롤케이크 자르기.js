function solution(topping) {
    let result = 0;
    const p1 = new Map();
    const p2 = new Map();
    
    for(const n of topping){
        p1.set(n, (p1.get(n) || 0) + 1);
    }
    
    for(const n of topping){
        if(p1.get(n) === 1){
            p1.delete(n);
        }else{
            p1.set(n, p1.get(n) - 1);
        }
        p2.set(n, (p2.get(n) || 0) + 1);
        
        if(p1.size === p2.size){
            result++;
        }else if(p1.size < p2.size){
            break;
        }
        
    }
    
    return result;
}