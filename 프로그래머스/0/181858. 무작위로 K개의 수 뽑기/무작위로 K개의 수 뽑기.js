function solution(arr, k) {
    const result = new Array(k).fill(-1);
    const inResult = {};
    
    for(let i=0,j=0; i<arr.length && j<k; i++){
        if(!inResult[arr[i]]){
            result[j++] = arr[i];
            inResult[arr[i]] = true;
        }
    }
    
    return result;
}