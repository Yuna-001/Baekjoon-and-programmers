function solution(maps) {
    const islands = [];
    const visited = Array.from({length:maps.length},()=>[]);
    
    function dfs(row,col){
        let days = +maps[row][col];
        
        visited[row][col] = true;
        
        for(const direction of [[0,1],[0,-1],[1,0],[-1,0]]){
            const nextRow = row + direction[0];
            const nextCol = col + direction[1];
            if(nextRow >= 0 && nextRow < maps.length && nextCol >= 0 && nextCol < maps[0].length && !visited[nextRow][nextCol] && maps[nextRow][nextCol] !== "X"){
                days += dfs(nextRow,nextCol);
                
            }
        }

        
        return days;
    }
    
    for(let row=0; row<maps.length; row++){
        for(let col=0; col<maps[0].length; col++){
            if(!visited[row][col] && maps[row][col] !== "X"){
                islands.push(dfs(row,col));
            }   
        }
    }
    
    return islands.length === 0 ? [-1] : islands.sort((a,b)=>a-b);
}