function solution(arr, k) {
    return arr.map(n=> k%2 ? n*k : n+k);
}