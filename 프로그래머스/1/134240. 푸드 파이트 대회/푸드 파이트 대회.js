function solution(food) {
    let answer = '';
    food.forEach((n,i)=> answer+=String(i).repeat(n/2));
    return answer + "0" + answer.split("").reverse().join("");
}