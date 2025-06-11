function solution(bridge_length, weight, truck_weights) {
    const queue = [];
    let truckIdx = 0;
    let currentWeight = 0;
    let time = 0;
    
    while(truckIdx < truck_weights.length){
        if(queue.length === bridge_length){
            currentWeight -= queue.shift()
        }
        
        if(currentWeight + truck_weights[truckIdx] <= weight){
            currentWeight += truck_weights[truckIdx];
            queue.push(truck_weights[truckIdx++]);
        }else{
            queue.push(0);
        }
        
        time++;
    }
    
    return time + bridge_length;
}