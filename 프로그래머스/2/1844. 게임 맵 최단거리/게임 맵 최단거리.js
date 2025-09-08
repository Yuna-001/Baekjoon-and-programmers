function solution(maps) {
    const dir = [[0,1],[1,0],[-1,0],[0,-1]];
    const m = maps.length;
    const n = maps[0].length;
    const visited = Array.from({length:m},()=>new Array(n).fill(false))
    
    const queue = [{pos:[0,0],move:1}];
    visited[0][0] = true;
    
    while(queue.length){
        const {pos:[curY,curX], move} = queue.shift();
        
        if(curY===maps.length-1 && curX===maps[curY].length-1) return move;
        
        for(const [dy,dx] of dir){
            const nextY = curY+dy;
            const nextX = curX+dx;
            
            if(isValid(maps,nextY,nextX,visited)){
                queue.push({pos:[nextY,nextX],move:move+1});
                visited[nextY][nextX] = true;
            }
        }
    }
    
    return -1;
}
    
function isValid(maps,y,x,visited){
    return y>=0 && x>=0 && y<maps.length && x<maps[y].length && maps[y][x] === 1 && !visited[y][x];
}