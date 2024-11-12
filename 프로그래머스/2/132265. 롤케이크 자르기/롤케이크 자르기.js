function solution(topping) {
    let count = 0;
    const p2ToppingCounts = new Map();
    
    for(const type of topping){
        p2ToppingCounts.set(type, (p2ToppingCounts.get(type) || 0) + 1);
    }
    
    const p1ToppingTypes = new Set();
    
    for(const type of topping){
        p1ToppingTypes.add(type);
        
        if(p2ToppingCounts.has(type)){
            p2ToppingCounts.set(type, (p2ToppingCounts.get(type) || 0) - 1);
        }
        
        if(p2ToppingCounts.get(type) === 0){
            p2ToppingCounts.delete(type);
        }
        
        if(p1ToppingTypes.size === p2ToppingCounts.size){
            count++;
        }else if(p1ToppingTypes.size > p2ToppingCounts.size){
            break;
        }
        
    }
    
    return count;
    
}