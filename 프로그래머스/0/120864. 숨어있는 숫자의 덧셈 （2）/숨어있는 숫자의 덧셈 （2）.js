function solution(my_string) {
    const numArr = my_string.match(/\d+/g);
    if (numArr === null) return 0;
    return numArr.reduce((total,cur)=>total + +cur,0);
}