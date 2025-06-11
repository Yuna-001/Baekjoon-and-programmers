function solution(park, routes){
    const directions = {"N":[-1,0],"S":[1,0],"E":[0,1],"W":[0,-1]};
    
    let result;

    for(let y=0; y<park.length; y++){
        for(let x=0; x<park[y].length; x++){
            if(park[y][x] === "S"){
                result = [y,x]
            }
        }
    }
    
    function isValidPosition(y,x){
        return y>=0 && x>=0 && y<park.length && x<park[0].length;
    }
    
    for(const route of routes){
        const [dir, nStr] = route.split(" ");
        const n = Number(nStr);
        
        let isPossible = true;
        const currentDirection = directions[dir];
        
        for(let i=1; i<=n ;i++){
            const [currentY, currentX] = result.map((pos,idx)=> pos + i*currentDirection[idx]);
            
            if(!isValidPosition(currentY, currentX) || park[currentY][currentX] ==="X"){
                isPossible = false;
                break;
            }
        }
        
        if(isPossible){
            result = result.map((pos,idx)=> pos + n*currentDirection[idx])
        }
    }

    return result;
}