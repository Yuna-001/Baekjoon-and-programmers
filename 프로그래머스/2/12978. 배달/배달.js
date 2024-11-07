function solution(N, road, K) {
    const connections = Array.from({length:N+1},()=>[]);
    
    road.forEach(([v1,v2,weight])=>{
        connections[v1].push([v2,weight]);
        connections[v2].push([v1,weight]);
    })
    
    const distances = Array.from({length:N+1},()=>Infinity);
    distances[1] = 0;
    
    const queue = new Queue();
    queue.push([1,0]);
    
    while(!queue.isEmpty()){
        const [curTown, curDistance] = queue.pop();
        
        if(distances[curTown] < curDistance) continue;
        
        for(const [neighbor, distance] of connections[curTown]){
            const newDistance = distance + curDistance;
            if(newDistance < distances[neighbor] && newDistance <= K){
                distances[neighbor] = newDistance;
                queue.push([neighbor,newDistance]);
            }
        }
    }
    
    return distances.filter(distance => distance <= K).length;
}

class Queue{
    constructor(){
        this.items = [];
    }
    
    isEmpty(){
        return this.items.length === 0;
    }
    
    push(val){
        this.items.push(val);
    }
    
    pop(){
        return this.items.shift()
    }
    
    sort(){
        this.items.sort((a,b)=>a[1]-b[1]);
    }
}