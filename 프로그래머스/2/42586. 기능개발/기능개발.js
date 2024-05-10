function solution(progresses, speeds) {
    const result = [];
    const arr = [];
    let count = 0;
    
    for(let i=0; i<progresses.length; i++){
        arr.push(Math.ceil((100 - progresses[i])/speeds[i]));
    }
    
    for(let i=0, max=arr[0]; i<progresses.length; i++,count++){
       if(arr[i] > max) {
            result.push(count);
            count = 0;
            max = arr[i];
        }
    }
    
    result.push(count);
    
    return result;
}