function solution(n, computers) {
    let network = 0;
    const checked = [];
    
    function dfs(computer){
        for(let i=0; i<n; i++){
            if(!checked[i] && computers[computer][i]){
                checked[i] = true;
                dfs(i);
            }
        }
    }
    
    for(let i=0; i<n; i++){
        if(!checked[i]){
            checked[i] = true;
            dfs(i);
            network++;
        }
    }
    
    return network;
}