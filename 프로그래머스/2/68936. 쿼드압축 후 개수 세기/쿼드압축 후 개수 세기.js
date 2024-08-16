function solution(arr) {
    const result = [0,0];
    const queue = [[0,0,arr.length]];
    
    while(queue.length){
        const [startRow,startCol,size] = queue.shift();
        
        let sum = 0;
        
        for(let i=startRow; i<startRow+size; i++){
            for(let j=startCol; j<startCol+size; j++){
                sum += arr[i][j];
            }
        }

        if(sum === 0){
            result[0]++;
            continue;
        }else if(sum === size ** 2){
            result[1]++;
            continue;
        }
        
        for(let i=startRow; i<startRow+size; i+=size/2){
            for(let j=startCol; j<startCol+size; j+=size/2){
                queue.push([i,j,size/2]);
            }
        }
    }
    
    return result;
}

