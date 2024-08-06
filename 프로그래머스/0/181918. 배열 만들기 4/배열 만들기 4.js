function solution(arr) {
    const stk = [];
    
    for(let i=0; i<arr.length; i++){
        if(stk.length && stk.at(-1) >= arr[i]) {
            stk.pop();
            i--;
        } else {
            stk.push(arr[i]);
        }
    }
    
    return stk;
}