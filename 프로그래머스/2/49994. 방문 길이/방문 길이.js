const findEndPosition = (direction,row,col)=>{
    switch (direction){
        case "U": return [row+1,col];
        case "D": return [row-1,col];
        case "R": return [row,col+1];
        case "L": return [row,col-1];
    }
}

const isValidMove = (position)=>{
    return position[0] >= 0 && position[0] <= 10 && position[1] >= 0 && position[1] <= 10; 
}

function solution(dirs) {
    const visited = new Set();
    let now = [5,5];
    
    for(const direction of dirs){
        const end = findEndPosition(direction,now[0],now[1]);
        if(isValidMove(end)){
            visited.add(`${now} ${end}`);
            visited.add(`${end} ${now}`);
            now = end;
        }
    }
    
    return visited.size/2;
}