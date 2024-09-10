function solution(a, b) {
    const n = gcd(a,b);
    
    b /= n;
    
    while(b%2===0) b/=2;
    while(b%5===0) b/=5;
    
    return b===1 ? 1 : 2;
}

function gcd(a,b){
    return a%b ? gcd(b,a%b) : b;
}