function solution(n) {
    return new Array(Math.ceil(n/2)).fill(0).reduce((acc,cur,i)=> n%2 === 1 ? acc + 2*i+1 : acc+ Math.pow(2*i+2,2),0);
}