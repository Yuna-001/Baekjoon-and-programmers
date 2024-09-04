function solution(s) {
    const arr = s.split(" ").map(n => +n).sort((a,b) => a-b);
    return arr[0] + " " + arr.at(-1);
}