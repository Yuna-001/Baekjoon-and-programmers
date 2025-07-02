function solution(participant, completion) {
    const players = {};
    
    for(const player of participant){
        players[player] = (players[player] || 0) + 1;
    }
    
    for(const player of completion){
        if(players[player] === 1){
            delete players[player];
        }else{
            players[player] -= 1;
        }
    }
    
    return Object.keys(players)[0];
}