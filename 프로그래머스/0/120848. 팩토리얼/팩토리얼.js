function solution(n) { 
    for (let i=2; i<=11; i++){
        if(factorial(i) > n){
            return i-1;
        }
    }
    
    return 1;
}

function factorial(n){
    return n===1? 1 : n*factorial(n-1);
}