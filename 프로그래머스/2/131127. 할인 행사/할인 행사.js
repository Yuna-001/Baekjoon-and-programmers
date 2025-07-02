function solution(want, number, discount) {
    let result = 0;
    const items = {};
    
    for(let i=0; i<want.length; i++){
        items[want[i]] = number[i];
    }
    
    for(let start=0; start<=discount.length-10; start++){
        const copy = new Map(Object.entries(items));
        
        for(let i=0; i<10; i++){
            const item = discount[start+i];
            
            if(copy.has(item)){
                const n = copy.get(item);
                if(n === 1){
                    copy.delete(item)
                }else{
                    copy.set(item, n-1)
                }
            }
        }
        
        if(copy.size === 0) result++;
    }
    
    return result;
}