function solution(progresses, speeds) {
    const counts = [];
    const days = [];
    
    for(let i=0; i<progresses.length; i++){
        days.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    
    let count = 0;
    let maxDay = days[0];
    
    for(let i=0; i<days.length; i++){
        if(days[i] <= maxDay){
            count++;
        }else{
            counts.push(count)
            maxDay = days[i];
            count = 1;
        }
    }
    
    counts.push(count);
    
    return counts;
}