function solution(absolutes, signs) {
   return absolutes.reduce((acc,n,i)=> signs[i] ? acc+n : acc-n,0);
}