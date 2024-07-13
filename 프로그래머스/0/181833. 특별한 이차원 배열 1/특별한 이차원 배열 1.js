function solution(n) {
    const result = [];
    for (let i=0; i<n; i++){
        result.push(Array.from({length : n},(_,j)=> +(i===j)))
    }
    return result;
}