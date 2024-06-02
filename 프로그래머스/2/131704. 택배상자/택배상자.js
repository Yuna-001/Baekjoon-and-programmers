function solution(order) {
    const stack = [];
    let box = 0;
    let max = 0;
    
    for(let i=0; i<order.length; i++){
        if(order[i] < stack[stack.length-1]) break;
        
        if(order[i] > max){
            for(let j=max+1; j<=order[i]; j++){
                stack.push(j);
            }
            max = order[i];
        }
        
        if(order[i] === stack[stack.length-1]){
            stack.pop();
            box++;
        }
    }
    
    return box;
}