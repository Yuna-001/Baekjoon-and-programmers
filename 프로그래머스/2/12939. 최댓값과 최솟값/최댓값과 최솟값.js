function solution(s) {
    const nums = s.split(" ").map(n => +n);
    return `${Math.min(...nums)} ${Math.max(...nums)}`;
}