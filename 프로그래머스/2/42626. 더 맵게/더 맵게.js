function solution(scoville, K) {
    let count = 0;
    
    const queue = new MinHeap();
    
    scoville.forEach(n => {queue.push(n)});
    
    while(queue.size() > 1){
        const min1 = queue.pop();
        
        if(min1 >= K) return count;
        
        const min2 = queue.pop();
        
        const food = min1 + min2*2;
        
        count++;
        queue.push(food);
    }
    
    return queue.pop() >= K ? count : -1;
}

class MinHeap{
    constructor(){
        this.items = [];
    }
    
    size(){
        return this.items.length;
    }
    
    swap(i,j){
        [this.items[i], this.items[j]] = [this.items[j],this.items[i]]
    }
    
    push(val){
        this.items.push(val);
        this.bubbleUp();
    }
    
    bubbleUp(){
        let idx = this.size() - 1;
        
        while(idx > 0){
            const parent = Math.floor((idx-1)/2);
            if(this.items[parent] <= this.items[idx]) break;
            this.swap(parent,idx);
            idx = parent;
        }
    }
    
    pop(){
        if(this.size() === 0) return null;
        
        const min = this.items[0];
        this.items[0] = this.items.at(-1);
        this.items.pop();
        this.sinkDown();
        
        return min;
    }
    
    sinkDown(){
        let idx = 0;
        let left = idx*2+1;
        let right = idx*2+2;
        
        while(left < this.size()){
            const smaller = right < this.size() && this.items[right] < this.items[left] ? right : left;
            if(this.items[smaller] >= this.items[idx]) break;
            this.swap(smaller,idx);
            idx = smaller;
            left = idx*2+1;
            right = idx*2+2;
        }
    }
}