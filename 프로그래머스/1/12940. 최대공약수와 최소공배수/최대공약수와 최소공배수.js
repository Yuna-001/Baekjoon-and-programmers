function solution(n, m) {
    const gcd = getGCD(n,m);
    
    return [gcd,n*m/gcd];    
}

function getGCD(a,b){
    return a%b===0 ? b : getGCD(b,a%b);
}