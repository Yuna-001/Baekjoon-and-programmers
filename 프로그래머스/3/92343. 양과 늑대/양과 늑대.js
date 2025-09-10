class Queue{
    items=[];
    front=0;
    rear=0;
    
    push(item){
        this.items.push(item);
        this.rear++;
    }
    
    pop(){
        return this.items[this.front++];
    }
    
    isEmpty(){
        return this.front === this.rear;
    }
}

function solution(info, edges) {
    const tree = Array.from({length: info.length},()=>[]);
    
    for(const [from,to] of edges){
        tree[from].push(to);
    }
    
    const queue = new Queue();
    queue.push({position:0,sheepCount:1,wolfCount:0,visited: new Set()});
    
    let maxSheep = 0;
    
    while(!queue.isEmpty()){
        const {position,sheepCount,wolfCount,visited} = queue.pop();
        
        maxSheep = Math.max(maxSheep,sheepCount);
        
        for(const next of tree[position]){
            visited.add(next);
        }
        
        for(const next of visited){
            if(info[next] === 1){ // 늑대
                if(sheepCount > wolfCount +1){
                    const newVisited = new Set(visited);
                    newVisited.delete(next);
                    queue.push({position:next,sheepCount,wolfCount:wolfCount+1,visited:newVisited})
                }
            } else{ // 양
                const newVisited = new Set(visited);
                newVisited.delete(next);
                queue.push({position:next,sheepCount:sheepCount+1,wolfCount,visited:newVisited})
            }
        }
    }
    
    return maxSheep;
}