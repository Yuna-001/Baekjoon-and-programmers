function solution(toppings) {
    let result = 0;
    const p1 = new Map();
    const p2 = new Map();
    
    toppings.forEach(topping => p2.set(topping, (p2.get(topping) || 0 ) +1));
    
    for (let i=0; i<toppings.length-1 && p1.size <= p2.size; i++){
        p1.set(toppings[i], (p1.get(toppings[i]) || 0 ) +1);
        
        if (p2.get(toppings[i]) === 1) {
            p2.delete(toppings[i]);
        } else {
            p2.set(toppings[i], p2.get(toppings[i]) - 1);
        }
        
        if(p1.size === p2.size) result++;
    }
    
    return result;
}