function solution(ineq, eq, n, m) {
    const ops = {
        ">=" : (a,b) => a >= b,
        "<=" : (a,b) => a <= b,
        ">!" : (a,b) => a > b,
        "<!" : (a,b) => a < b
    }
    
    return +ops[ineq+eq](n,m);
}