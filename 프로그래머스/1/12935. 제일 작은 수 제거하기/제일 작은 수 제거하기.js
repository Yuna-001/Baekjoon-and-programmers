function solution(arr) {
    if (arr.length === 1) return [-1];
    
    let minIndex = arr.indexOf(Math.min(...arr));
    
    return [...arr.slice(0,minIndex), ...arr.slice(minIndex+1)];
    
}