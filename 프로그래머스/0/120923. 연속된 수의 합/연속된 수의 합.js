function solution(num, total) {
    const start = total / num - (num+1) / 2 + 1;
    return Array.from({length:num},(_,i)=>start+i);
}