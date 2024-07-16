function solution(binomial) {
    const [n1,op,n2] = binomial.split(" ");
    return op==="-" ? n1-n2: op==="*"? n1*n2 : +n1 + +n2;
}