function solution(arr, queries) {
    for (const [s,e,k] of queries) {
        for (let i = Math.ceil(s/k)*k; i <= e; i += k) {
            arr[i]++;
        }
    }
    
    return arr;
}