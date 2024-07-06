function solution(num_str) {
    return [...num_str].reduce((total, n) => total + +n, 0);
}