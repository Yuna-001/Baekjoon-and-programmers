function solution(players, m, k) {
    const expiredHours = new Array(24).fill(0);
    let currentServer = 0;
    let count = 0;
    
    for (let i=0; i<24; i++){
        currentServer -= expiredHours[i];
        
        const newServer = Math.max(0, Math.floor(players[i]/m) - currentServer);
        count += newServer;
        currentServer += newServer;
        
        if(i+k<24){
            expiredHours[i+k] = newServer;
        }
    }
    
    return count;
}