function solution(n, computers) {
    const visited = {};
    let network = 0;
    
    function dfs(start){
        if(visited[start]) return;
        
        visited[start] = true;
        
        for(let end=0; end<n; end++){
            if(computers[start][end]){
                dfs(end);
            }
        }
    }
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            dfs(i);
            network++;
        }
    }
    
    return network;
}