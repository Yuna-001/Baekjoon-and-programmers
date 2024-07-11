function solution(number) {
    return [...number].reduce((total,n)=>total+ +n,0) % 9;
}