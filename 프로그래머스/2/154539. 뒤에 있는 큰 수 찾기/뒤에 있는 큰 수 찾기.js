function solution(numbers) {
    const result = [];
    const stack = [];
    
    for (let i=0; i<numbers.length; i++){
        while (numbers[stack.at(-1)] < numbers[i]){
            result[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    
    while(stack.length){
        result[stack.pop()] = -1;
    }
    
    return result;
}