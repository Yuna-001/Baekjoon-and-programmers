function solution(s) {
    const numbers=["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
    for(let i=0; i<numbers.length && typeof +s === "number"; i++){
        s = s.replace(new RegExp(numbers[i],"g"),i);
    }
    
    return +s;
}