function solution(array, height) {
    return array.reduce((total,cur)=>total + Number(cur > height),0);
}