function solution(land, height) {
    let minCost = 0;
    const N = land.length;
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    const visited = Array.from({length: N}, ()=>[]);
    
    const queue = new MinBinaryHeap();
    queue.push([0,0,0]);
    
    while(queue.size() > 0){
        const [y,x,cost] = queue.pop();
        
        if(visited[y][x]) continue;
        visited[y][x] = true;
        
        minCost += cost;
        
        for(const [dy,dx] of directions){
            const [newY, newX] = [y+dy, x+dx];
            if(newX >= 0 && newY >=0 && newX < N && newY < N){
                const gap = Math.abs(land[y][x] - land[newY][newX]);
                const newCost = gap > height ? gap : 0;
                queue.push([newY,newX,newCost]);
            }
        }
    }
    
    return minCost;
}

class MinBinaryHeap{
    constructor(){
        this.items = [];
    }
    
    size(){
        return this.items.length;
    }
    
    push(val){
        this.items.push(val);
        this.bubbleUp();
    }
    
    bubbleUp(){
        let idx = this.size() - 1;
        
        while(idx > 0){
            const parent = Math.floor((idx-1)/2);
            
            if(this.items[idx][2] >= this.items[parent][2]) break;
               
            [this.items[idx], this.items[parent]] =  [this.items[parent], this.items[idx]];
            idx = parent;
        }
    }
    
    pop(){
        if(this.size() === 0) return null;
        
        const min = this.items[0];
        
        this.items[0] = this.items[this.size() - 1];
        this.items.pop();
        
        this.sinkDown();
        
        return min;
    }
    
    sinkDown(){
        let idx = 0;
        let left = idx*2+1;
        let right = idx*2+2;
        
        while(left < this.size()){
            const smallerChild = right < this.size() && this.items[right][2] < this.items[left][2] ? right : left;         
            if(this.items[idx][2] <= this.items[smallerChild][2]) break;
            
            [this.items[idx], this.items[smallerChild]] =  [this.items[smallerChild], this.items[idx]];
            idx = smallerChild;
            left = idx*2+1;
            right = idx*2+2;
        }
    }
}