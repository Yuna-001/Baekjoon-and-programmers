function solution(n, edge) {
    const graph = Array.from({length: n+1},()=> []);
   
    for(const [v1,v2] of edge){
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
   
    const distances = new Array(n+1).fill(Infinity);
    const visited = [];

    const queue = [[1,0]];
    visited[1] = true;
    
    let maxDistance = -1;
    
    while(queue.length){
        const [v,distance] = queue.shift();
        
        distances[v] = distance;
        
        if(distance > maxDistance){
            maxDistance = distance;
        }
        
        for(const neighbor of graph[v]){
            if(!visited[neighbor]){
                queue.push([neighbor, distance + 1]);
                visited[neighbor] = true;
            }
        }
    }
    
    return distances.filter(distance => distance === maxDistance).length;
}