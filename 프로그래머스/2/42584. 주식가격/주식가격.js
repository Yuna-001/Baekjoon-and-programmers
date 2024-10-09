function solution(prices) {
    const result = Array(prices).fill(0);
    const stack = [];
    
    for(let i=0; i<prices.length; i++){
        while(stack.length > 0 && stack.at(-1).price > prices[i]){
            const { idx } = stack.pop();
            result[idx] = i - idx;
        }
            
         stack.push({idx : i, price : prices[i]});
    }
    
    while(stack.length > 0){
        const { idx } = stack.pop();
        result[idx] = prices.length - idx - 1;;
    }
    
    return result;
}