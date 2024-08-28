function solution(x, y, n) {
    const queue = [{result : y, count : 0}];
    const visited = {[y] : true};
    
    while(queue.length){
        let {result, count} = queue.shift();
        
        if(result === x) return count;
        
        count++;
        
        if(result-n >= x && !visited[result-n]){
            queue.push({result:result-n,count});
            visited[result-n] = true;
        }
        
        if((result/2)%1===0 && result/2 >= x && !visited[result/2]){
            queue.push({result : result/2, count});
            visited[result/2] = true;
        }
        
        if((result/3)%1===0 && result/3 >= x && !visited[result/3]){
            queue.push({result : result/3, count});
            visited[result/3] = true;
        }
    }
    
    return -1;
}