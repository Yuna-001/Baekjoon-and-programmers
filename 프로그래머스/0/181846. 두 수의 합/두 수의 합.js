function solution(a, b) {
    const arrA = [...a];
    const arrB = [...b];
    let carry = 0;
    let result = "";
    
    while(arrA.length && arrB.length){
        const n = carry + +arrA.pop() + +arrB.pop();
        
        if(n >= 10){
            carry = 1;
            result = n - 10 + result;
        }else{
            carry = 0;
            result = n + result;
        }
    }
    
    const rest = arrA.length ? arrA : arrB;
    
    while(rest.length){
        const n = carry + +rest.pop();
        
        if(n >= 10){
            carry = 1;
            result = n - 10 + result;
        }else{
            carry = 0;
            result = n + result;
        }
    }
    
    if(carry) result = carry + result;
    
    return result;
}