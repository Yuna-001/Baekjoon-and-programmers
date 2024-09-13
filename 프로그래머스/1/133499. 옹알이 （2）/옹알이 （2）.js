function solution(babbling) {
    const reg1 = new RegExp("^(aya|ye|woo|ma)+$");
    const reg2 = new RegExp("ayaaya|yeye|woowoo|mama");
    
    return babbling.reduce((acc,str)=> (reg1.test(str) && !reg2.test(str)) ? acc+1 : acc,0);
    
}