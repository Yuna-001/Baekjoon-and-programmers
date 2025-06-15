function solution(dirs) {
    let current = [0,0];
    const visited = new Set();
    
    for(const dir of dirs){
        const [dx,dy] = getDxDy(dir);
        const next = [current[0]+dx,current[1]+dy];
        if(next[0] < -5 || next[0] > 5 || next[1] < -5 || next[1] > 5) continue;
        visited.add(`start:[${current[0]},${current[1]}] end:${next[0]},${next[1]}`);
        visited.add(`start:[${next[0]},${next[1]}] end:${current[0]},${current[1]}`);
        current = next;
    }
    
    return visited.size/2;
}

function getDxDy(dir){
    if(dir === "U") return [0,1];
    if(dir === "D") return [0,-1];
    if(dir === "R") return [1,0];
    return [-1,0];
}