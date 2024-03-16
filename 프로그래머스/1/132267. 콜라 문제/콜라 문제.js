function solution(a, b, n) {
    let result = 0;
    let newCola = 0;
    
    while(n >= a){
        newCola = Math.floor(n/a)*b;
        result+=newCola;
        n = n%a + newCola;        
    }
    
    return result;
}