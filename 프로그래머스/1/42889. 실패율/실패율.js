function solution(N, stages) {
    // 스테이지당 멈춰있는 사용자 수
    const players = Array.from({length: N+2},()=>0);
    let totalPlayerCount = stages.length;
    const failureRates = [];
    
    stages.forEach(stage => {
        players[stage] += 1;
    })
    
    for(let i=1; i<=N; i++){
        if(players[i]===0){
            failureRates[i]=0;
            continue;
        }
        failureRates[i] = players[i]/totalPlayerCount;
        totalPlayerCount -= players[i];
    }
    
    const result = Object.entries(failureRates).sort((a,b)=>b[1]-a[1]);
    
    return result.map(([idx]) => +idx)
    
}