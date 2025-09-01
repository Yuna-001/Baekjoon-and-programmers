function solution(maps) {
    const rowLength = maps.length;
    const colLength = maps[0].length;
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    const visited = Array.from({length:rowLength},()=>Array.from({length:colLength},()=>[false,false]));
    const queue = [];
    
    for(let i=0; i<rowLength && !queue.length; i++){
        for(let j=0; j<colLength; j++){
            if(maps[i][j] === "S"){
                queue.push({position:[i,j],count:0,lever:0});
                visited[i][j][0] = true;
                break;
            }
        }
    }
    
    while(queue.length){
        let {position:[curY,curX],count,lever} = queue.shift();
        
        if(lever && maps[curY][curX]==="E") return count;
        
        if(maps[curY][curX]==="L") lever = 1;
        
        count++;
        
        for(let i=0; i<dx.length; i++){
            const nextX = curX+dx[i];
            const nextY = curY+dy[i];
            
            if(isValidPosition(maps,visited,nextX,nextY,lever)){
                queue.push({
                    position:[nextY,nextX],
                    count,
                    lever
                });
                visited[nextY][nextX][lever] = true;
            }
        }
    }
    
    return -1;
}
    
function isValidPosition(maps,visited,x,y,lever){
    return x>=0 && y>=0 && x<maps[0].length && y<maps.length && maps[y][x] !== "X" && !visited[y][x][lever]
}