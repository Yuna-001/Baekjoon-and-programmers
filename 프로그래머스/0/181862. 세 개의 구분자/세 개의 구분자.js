function solution(myStr) {
    const result = myStr.replace(/a|b|c/g," ").match(/[a-z]+/g);
    
    return result ? result : ["EMPTY"];
}