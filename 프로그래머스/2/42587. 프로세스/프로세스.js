function solution(priorities, location) {
    let queue = priorities.map((priority,index)=>({priority,index}));
    let count = 0;
    let current;
    
    while(current !== location){
        const max = Math.max(...queue.map(el => el.priority));
        const i = queue.findIndex(({priority})=>priority===max);
        const arr = queue.splice(0,i+1);
        
        current = arr.pop().index;
        queue = [...queue, ...arr];
        count++;
    }   
    
    return count;
}