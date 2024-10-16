function solution(numbers) {
    const arr = [0,1,2,3,4,5,6,7,8,9];
    
    numbers.forEach(n => {
        arr[n] = 0;
    })
    
    return arr.reduce((acc,cur)=>acc+cur,0);
}