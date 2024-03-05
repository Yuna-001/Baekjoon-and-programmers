function solution(i, j, k) {
    let str = ""
    for(let n=i; n<=j; n++){
        str+=n;
    }
    return str.split(k).length - 1;
}