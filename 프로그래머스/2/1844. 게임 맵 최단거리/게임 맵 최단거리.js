class Queue{
    constructor(){
        this.items = [];
        this.head = 0;
        this.rear = 0;
    }
    
    push(val){
        this.items.push(val);
        this.rear++;
    }
    
    pop(){
        return this.items[this.head++];
    }
    
    isEmpty(){
        return this.head === this.rear;
    }
}

function solution(maps) {
    const queue = new Queue();
    const m = maps.length;
    const n = maps[0].length;
    const visited = Array.from({length:m}, ()=>[]);
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    
    queue.push({position: [0,0], distance: 1});
    
    while(!queue.isEmpty()){
        const {position: [y,x], distance} = queue.pop();
        
        if(y === m-1 && x === n-1) return distance;
        
        for(const [dy,dx] of directions){
            if(isValidPosition(y+dy,x+dx,[m,n],visited,maps)){
                queue.push({position: [y+dy,x+dx], distance: distance+1});
                visited[y+dy][x+dx] = true;
            }
        }
    }
    
    return -1;
}

function isValidPosition(y,x,limit,visited,maps){
    return  x >= 0 && y >= 0 && x < limit[1] && y < limit[0] && !visited[y][x] && maps[y][x];
}