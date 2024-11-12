function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    const move = { up : [0,1], down : [0,-1], left: [-1,0], right: [1,0] };
    
    for(const key of keyinput){
        const [dx, dy] = move[key];
        
        if(isValid(x+dx, y+dy, maxX, maxY)){
            x = x+dx;
            y = y+dy;
        }
    }
    
    return [x,y];
}

function isValid(x,y,maxX,maxY){
    return x >= (maxX * -1) && x <= maxX && y >= (maxY * -1) && y <= maxY;
}