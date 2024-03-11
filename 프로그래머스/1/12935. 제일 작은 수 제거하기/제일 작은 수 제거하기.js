function solution(arr) {
    if (arr.length === 1) return [-1];
    
    let minIndex = 0;
    
    for(let i=1; i<arr.length; i++){
        if(arr[i] < arr[minIndex]) minIndex = i;
    }
    
    return [...arr.slice(0,minIndex), ...arr.slice(minIndex+1)];
    
}