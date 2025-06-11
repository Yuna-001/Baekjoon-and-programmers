function solution(numbers, target) {
    let count = 0;
    const stack = [{total: 0 , nextIndex: 0}]
 
    while(stack.length > 0){
        const {total, nextIndex} = stack.pop();
        
        if(nextIndex === numbers.length){
            if(total === target) count++;
            continue;
        }
        
        stack.push({total: total+numbers[nextIndex], nextIndex: nextIndex+1})
        stack.push({total: total-numbers[nextIndex], nextIndex: nextIndex+1})
    }
    
    return count;
}