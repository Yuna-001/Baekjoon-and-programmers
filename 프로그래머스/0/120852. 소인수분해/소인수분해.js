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
    let isPrime;
    if (num === 2){
        isPrime=true;
    } else {
        for (let i =2; i<num; i++){
            if (num % i ==0){
                isPrime=false;
                break;
            }
            else{
                isPrime=true;
            }
        }
    }
    return isPrime;
}