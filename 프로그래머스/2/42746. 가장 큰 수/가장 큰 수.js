function solution(numbers) {
    const answer = numbers.map(n => String(n)).sort((a,b)=>Number(b+a)-Number(a+b)).join("");
    
    return Number(answer) === 0 ? "0" : answer;
}