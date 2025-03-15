function solution(n) {
    let answer = [];
    
    for(let i=2; i <= n; i++){
        if(n%i===0){
            if(isPrime(i)) answer.push(i);
            n/=i;
        }
    }
    
    return answer;    
}

function isPrime(num) {
    if (num === 2) return true;
    
    const sqrt = Math.sqrt(num);
    
    for (let i =2; i<=sqrt; i++){
        if (num % i ==0){
            return false;
        }
    }
    return true;
}