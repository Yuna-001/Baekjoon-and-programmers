function solution(n, wires){
    const graph = Array.from({length: n+1}, ()=>[]);
    let answer = n;
    
    wires.forEach(([v1,v2])=>{
        graph[v1].push(v2);
        graph[v2].push(v1);
    })
    
    const visited = [];
    
    function dfs(node){
        let count = 1;
        
        for(const neighbor of graph[node]){
            if(!visited[neighbor]){
                visited[neighbor] = true;
                count += dfs(neighbor);
            }
        }
        
        answer = Math.min(answer, Math.abs(n-2*count));
        return count;
    }
    
    visited[1] = true;
    dfs(1);
    
    return answer;
}