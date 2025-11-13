function solution(N, road, K) {
    // 다익스트라 알고리즘
    
    const maps = Array.from({length: N},()=> new Map());
    
    for(const [v1,v2,t] of road){
        const minTime = Math.min(t, maps[v1-1].get(v2-1) || Infinity);
        
        maps[v1-1].set(v2-1, minTime);
        maps[v2-1].set(v1-1, minTime);
    }
    
    const distances = new Array(N).fill(Infinity);
    const visited = new Array(N).fill(false);
    
    distances[0] = 0;
    
    const queue = [];
    queue.push({town:0, distance:0})
    
    while(queue.length){
        const {town, distance} = queue.shift();
        visited[town] = true;
        
        for(const [t,d] of maps[town]){
            if(!visited[t] && distances[t] > d + distance){
                distances[t] = d + distance;
                queue.push({town:t, distance:distances[t]});
            }
        }
        
        queue.sort((a,b)=>a.distance-b.distance);
    }
    
    return distances.filter(distance => distance <= K).length;
}