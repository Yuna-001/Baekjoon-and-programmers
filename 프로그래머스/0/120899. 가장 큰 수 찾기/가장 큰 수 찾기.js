function solution(array) {
    const n = Math.max(...array);
    const idx = array.indexOf(n);
    return [n,idx];
}