function solution(progresses, speeds) {
    const result = [];
    let count = 1;
    let max = Math.ceil((100 - progresses[0])/speeds[0]);
    
    for(let i=1; i<progresses.length; i++,count++){
        const day = Math.ceil((100 - progresses[i])/speeds[i]);
        
        if(day > max) {
            result.push(count);
            max = day;
            count = 0;
        }
    }
    
    result.push(count);
    
    return result;
}