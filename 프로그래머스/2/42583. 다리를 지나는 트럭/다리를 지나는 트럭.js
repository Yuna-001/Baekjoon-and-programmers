function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let index = 0;
    const queue = [];
    let total_weight = 0
    
    while(index < truck_weights.length || total_weight){
        time++;
        
        if(queue.length === bridge_length){
            total_weight -= queue.shift();
        }
        
        if (total_weight + truck_weights[index] <= weight){
            total_weight += truck_weights[index];
            queue.push(truck_weights[index]);
            index++;
        } else {
            queue.push(0);
        } 
    }
    
    return time;
}