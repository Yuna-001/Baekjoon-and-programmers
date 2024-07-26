function solution(arr) {
    const n = Math.log2(arr.length);
    
    if(n%1===0) return arr;
    
    const goalLength = 2 ** Math.ceil(n);
    
    for(let i = arr.length; i < goalLength; i++){
        arr[i]=0;
    }
    
    return arr;
}