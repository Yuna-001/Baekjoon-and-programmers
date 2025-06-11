function solution(players, callings) {
    const ranking = new Map();
    
    players.forEach((player,idx)=>{
        ranking.set(player,idx);
    })
    
    for(const calling of callings){
        const prevRanking = ranking.get(calling);
        ranking.set(calling, prevRanking-1);
        ranking.set(players[prevRanking-1], prevRanking);
        [players[prevRanking-1], players[prevRanking]] = [players[prevRanking], players[prevRanking-1]]
    }
    
    return players;
}
