function solution(num_list) {
    const sumArr =  [0,0];
    num_list.forEach((num,i)=> sumArr[i%2] += num);
    return Math.max(...sumArr);
}