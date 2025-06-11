function solution(tickets) {
    const result = [];
    const routes = {};
    
    for(const [start,end] of tickets){
       if(!routes[start]) routes[start] = [];
        routes[start].push(end);
    }
    
    for(const airport in routes){
        routes[airport].sort()
    }
    
    function dfs(start){
        while(routes[start] && routes[start].length){
            dfs(routes[start].shift())
        }
        
        result.push(start);
    }
    
    dfs("ICN")
    
    return result.reverse();
}