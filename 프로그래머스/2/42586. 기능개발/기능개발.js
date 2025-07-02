function solution(progresses, speeds) {
    if(progresses.length === 0) return [];
    
    const counts = [];
    let count = 1;
    let maxDay = Math.ceil((100-progresses[0])/speeds[0]);
    
    for(let i=1; i<progresses.length; i++){
        const day = Math.ceil((100-progresses[i])/speeds[i]);
        
        if(day <= maxDay){
            count++;
        }else{
            counts.push(count);
            maxDay = day
            count = 1;
        } 
    }
    
    counts.push(count);

    return counts;
}