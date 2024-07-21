function solution(a, d, included) {
    return included.reduce((total,cur,idx) => cur ? total + a + d * idx : total, 0);
}