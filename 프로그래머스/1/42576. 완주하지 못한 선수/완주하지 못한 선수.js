function solution(participant, completion) {
    const players = {};
    
    participant.forEach(p=>{
        if(players[p]) players[p]++;
        else players[p] = 1;
    })
    
    completion.forEach(p=>{
        if(players[p] === 1) delete players[p];
        else players[p]--;
    })
    
    return Object.keys(players)[0];
}