function solution(operations) {
    const queue = [];

    for (const op of operations){
        let [str,num] = op.split(" ");
        num = Number(num);
        
        if(str === "I"){
            queue.push(num);
            for(let i=queue.length-1; i>0 && queue[i] < queue[i-1]; i--){
                [queue[i],queue[i-1]] =  [queue[i-1],queue[i]]
            }
        }else if (num === -1){
            queue.shift();
        }else {
            queue.pop();
        }
    }
    
    return queue.length ? [Math.max(...queue),Math.min(...queue)] : [0,0];
}