function solution(array, n) {
    return array.map(el => [el,Math.abs(el-n)]).sort((a,b) =>a[1]===b[1]? a[0]-b[0] : a[1]-b[1])[0][0]
}