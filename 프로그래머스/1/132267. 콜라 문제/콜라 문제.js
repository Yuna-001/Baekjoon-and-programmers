function solution(a, b, n) {
    // n-b: 총 교환 가능한 병 수 (아차피 마지막에 교환 받은 b병은 남게 됨)
    // a-b: 교환할 때마다 줄어드는 병 수
    // 교환 가능 횟 수: Math.floor((n-b)/(a-b))
    return Math.floor((n-b)/(a-b))*b;
}