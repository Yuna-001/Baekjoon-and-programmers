function solution(operations) {
    const queue = [];

    for (const op of operations){
        let [str,num] = op.split(" ");
        num = Number(num);
        
        if(str === "I"){
            queue.push(num);
            sorting(queue);
        }else if (num === -1){
            queue.shift();
        }else {
            queue.pop();
        }
    }
    
    return queue.length ? [Math.max(...queue),Math.min(...queue)] : [0,0];
}

function sorting(arr){
    const value = arr.at(-1);
    let idx = arr.length-2;
    for(; idx>=0 && arr[idx] > value; idx--){
        arr[idx+1] = arr[idx];
    }
    arr[idx+1] = value;
}