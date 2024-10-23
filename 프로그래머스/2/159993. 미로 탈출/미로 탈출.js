class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0
    }
    
    push(val){
        const node = new Node(val);
        
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        
        this.length++;
    }
    
    shift(){
        if(!this.first) return undefined;
        
        const node = this.first;
        
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
            node.next = null;
        }
        
        this.length--;
        
        return node.val;
    }
}

function solution(maps) {
    const m = maps.length;
    const n = maps[0].length;
    let visited = Array.from({length: m}, () => Array.from({length: n}, ()=> [false,false]));
    let queue = new Queue();
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    let visitedLever = 0;
    
    for(let row=0; row<maps.length && !queue.length; row++){
        for(let col=0; col<maps[0].length; col++){
            if(maps[row][col] === "S"){
                queue.push({row, col, count: 0, visitedLever: 0});
                visited[row][col][0] = true;
                break;
            }
        }
    }
    
    while(queue.length){
        let {row, col, count, visitedLever} = queue.shift();
        
        if(visitedLever && maps[row][col] === "E") return count;
        
        if(maps[row][col] === "L") visitedLever = 1;
        
        for(const [dy,dx] of directions){
            if(isPossible(row+dy,col+dx,visitedLever,maps,visited)){
                queue.push({row: row+dy, col: col+dx, count: count+1, visitedLever});
                visited[row+dy][col+dx][visitedLever] = true;
            }
        }
    }
    
    return -1;
}

function isPossible(row,col,visitedLever,maps,visited){
        return row >= 0 && row < maps.length && col >= 0 && col < maps[0].length && maps[row][col] !== "X" && !visited[row][col][visitedLever];
}

