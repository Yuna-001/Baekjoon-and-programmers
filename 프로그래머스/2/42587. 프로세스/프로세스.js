function solution(priorities, location) {
    let queue = priorities.map((priority,index)=>({priority,index}));
    let count = 0;
    
    while(queue.length){
        const max = Math.max(...queue.map(el => el.priority));
        const i = queue.findIndex(({priority})=>priority===max);
        const arr = queue.splice(0,i+1);
        const element = arr.pop();
        
        count++;
        
        if(element.index === location) break;
        
        queue = [...queue, ...arr];
    }   
    
    return count;
}