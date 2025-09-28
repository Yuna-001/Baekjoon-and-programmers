function solution(topping) {
    let result = 0;
    
    const a = new Set();
    const b = new Map();
    
    for(const el of topping){
        b.set(el, (b.get(el) || 0 ) + 1);
    }
    
    for(let i=0; i<topping.length-1 && a.size <= b.size; i++){
        const el = topping[i];
        
        a.add(el);
        
        if(b.get(el) === 1){
            b.delete(el);
        }else{
            b.set(el, b.get(el)-1);
        }
        
        if(a.size === b.size) result++;
    }
    
    return result;
}