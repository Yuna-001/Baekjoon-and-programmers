class Queue{
    constructor(){
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }
    
    isEmpty(){
        return this.front === this.rear;
    }
    
    push(item){
        this.items.push(item);
        this.rear++;
    }
    
    pop(){
        return this.items[this.front++];
    }
}

function solution(maps) {
    const goal = [maps[0].length-1, maps.length-1];
    
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    
    const queue = new Queue();
    queue.push([0,0,1]);
    
    while(!queue.isEmpty()){
        const [x,y,step] = queue.pop();
       
        if(x === goal[0] && y === goal[1]) return step;
        
        for(const [dx,dy] of dirs){
            const nextX = x + dx;
            const nextY = y + dy;
            
            if(isValidPosition(nextX,nextY,maps)){
                queue.push([nextX, nextY, step+1])
                maps[nextY][nextX] = 0;;
            }
        }
    }
    
    return -1;
}

function isValidPosition(x,y,maps){
    return y >= 0 && x >= 0 && y < maps.length && x < maps[0].length && maps[y][x]===1;
}