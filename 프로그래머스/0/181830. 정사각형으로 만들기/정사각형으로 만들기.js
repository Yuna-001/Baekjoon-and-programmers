function solution(arr) {
    const rowLength = arr.length;
    const colLength = arr[0].length;
    
    if(rowLength > colLength){
        for(let i=0; i<rowLength; i++){
            for(let j=colLength; j<rowLength; j++){
                arr[i].push(0);
            }
        }
    }else if(rowLength < colLength){
        for(let i=rowLength; i<colLength; i++){
            arr.push(new Array(colLength).fill(0));
        }
    }
    
    return arr;
}