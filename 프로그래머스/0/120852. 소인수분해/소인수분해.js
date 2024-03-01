function solution(n) {
    let answer = [];
    for(let i=2; i <= n; i++){
        if(n%i===0 && isPrime(i)){
            answer.push(i);
            n/=i;
        }
    }
    return answer;    
}

function isPrime(num) {
    if (num === 2) return true;
    for (let i =2; i<num; i++){
        if (num % i ==0){
            return false;
            break;
        }
    }
    return true;
}