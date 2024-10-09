function solution(N, stages) {
    stages.sort((a,b)=>a-b);
    
    const failurePercentArr = Array.from({length:N},(_,i)=>({stage:i+1,failurePercent:0}));
    
    for(let i=0; i<stages.length && stages[i] <=N; i++){
        const reach = stages.length - i;
        const firstIdx = i;
        while(stages[i+1]===stages[i]) i++;
        const notCleared = i-firstIdx+1;
        failurePercentArr[stages[i]-1].failurePercent = notCleared / reach;
    }

    failurePercentArr.sort((a,b)=>b.failurePercent - a.failurePercent);
    
    return failurePercentArr.map(({stage})=>stage);
    
}