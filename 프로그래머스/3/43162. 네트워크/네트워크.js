function solution(n, computers) {
    const visited = {};
    const connection = Array.from({length:n},()=>[]);
    let network = 0;
    
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(computers[i][j]){
                connection[i].push(j);
                connection[j].push(i);
            }
        }
    }
   
    function DFS(start){
        for(const computer of connection[start]){
            if(!visited[computer]){
                visited[computer] = true;
                DFS(computer)
                
            }
        }
    }
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            DFS(i);
            network++;
        }
    }
    
    return network;
}