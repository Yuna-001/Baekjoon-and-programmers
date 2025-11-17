function solution(keyinput, board) {
    const xLimit = (board[0]-1)/2;
    const yLimit = (board[1]-1)/2;
    const current = [0,0];
    const direction = {
        "left":[-1,0],"right":[1,0],"up":[0,1],"down":[0,-1]
    }
    
    for(const str of keyinput){
        const nextY = current[1]+direction[str][1];
        const nextX = current[0]+direction[str][0];
        
        if(nextX < -xLimit || nextY < -yLimit || nextX > xLimit || nextY > yLimit) continue;
        
        current[0]=nextX;
        current[1]=nextY;
    }
    
    return current;
}