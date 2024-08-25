function solution(n, edge) {
    let result = {max : 0, count : 0};
    
    const connection = {};
    
    for(const [v1,v2] of edge){
        if(!connection[v1]) connection[v1] = [];
        if(!connection[v2]) connection[v2] = [];
        connection[v1].push(v2);
        connection[v2].push(v1);
    }
    
    const queue = [{vertex : 1, distance : 0}];
    const visited = { 1 : true };
    
    while(queue.length){
        const {vertex, distance} = queue.shift();
        
        if(distance > result.max){
            result.max = distance;
            result.count = 1;
        }else if(distance === result.max){
            result.count++;
        }
        
        for(const v of connection[vertex]){
            if(!visited[v]) queue.push({vertex : v, distance : distance + 1});
            visited[v] = true;
        }
    }
    
    return result.count;
}