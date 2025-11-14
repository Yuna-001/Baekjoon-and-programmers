function solution(n, wires) {
    const tree = Array.from({length:n+1},()=>[]);
    const visited = new Array(n+1);
    
    for(const [v1,v2] of wires){
        tree[v1].push(v2);
        tree[v2].push(v1);
    }
    
    let minGap = n;
    
    function dfs(v){
        let count = 1;
        
        visited[v] = true;
        
        for(const neighbor of tree[v]){
            if(!visited[neighbor]){
                count += dfs(neighbor);
            }
        }
        
        minGap = Math.min(minGap, Math.abs(n-2*count));
        
        return count;
    }
    
    dfs(1);
    
    return minGap;
}