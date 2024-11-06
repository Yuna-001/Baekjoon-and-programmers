function solution(q, r, code) {
    return [...code].reduce((acc,cur,i)=>i%q===r ? acc+cur : acc,"")
}