function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let network = 0;
    
    function dfs(comp){
        visited[comp] = true;
        
        for(let i=0; i<n; i++){
            if(!visited[i] && computers[comp][i]) {
                dfs(i);
            }
        }
    }
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            network++;
            dfs(i);
        }
    }
    
    return network;
}