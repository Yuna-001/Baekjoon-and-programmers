function solution(n, computers) {
    const map = Array.from({length:n},()=>new Array());
    
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(computers[i][j]===1){
                map[i].push(j);
                map[j].push(i);
            }
        }
    }
    
    const visited = new Array(n).fill(false);
    let network = 0;
    
    function bfs(com){
        visited[com] = true;
        
        for(const neighbor of map[com]){
            if(!visited[neighbor]) bfs(neighbor);
        }
    }
    
    for(let i=0;i<n;i++){
        if(!visited[i]){
            network++;
            bfs(i);
        }
    }
    
    return network;
}