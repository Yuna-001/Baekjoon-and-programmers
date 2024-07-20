function solution(priorities, location) {
    let queue = priorities.map((priority,index)=>({priority,index}));
    let count = 0;
    
    while(true){
        const element = queue.shift();
        
        if(queue.some(v => v.priority > element.priority)){
            queue.push(element);
        } else{
            count++;
            if(element.index === location) return count;
        }
    }   
}