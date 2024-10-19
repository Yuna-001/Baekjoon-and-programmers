function combinations(arr,n){
    if(n===1) return arr.map(v => [v]);
    
    const result = [];
    
    arr.forEach((el,i)=>{
        const rest = arr.slice(i+1);
        const combis =combinations(rest,n-1);
        const combine = combis.map(v => [el,...v]);
        result.push(...combine);
    })
    
    return result;
}

function solution(orders, course) {
    const result = [];
    
    for(const n of course){
        const menus = [];
        
        for(const order of orders){
            const sortedOrder = [...order].sort();
            const combination = combinations(sortedOrder,n);
            menus.push(...combination);
        }
        
        const orderCount = {};
        
        for(const menu of menus){
            const key = menu.join("");
            orderCount[key] = (orderCount[key] || 0) + 1;
        }
        
        const max = Math.max(...Object.values(orderCount));
        
        if(max <= 1) continue;
        
        for(const [key, value] of Object.entries(orderCount)){
            if(value === max){
                result.push(key);
            }
        }
    }
    
    return result.sort();
}