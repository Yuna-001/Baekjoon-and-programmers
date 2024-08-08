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
    
    while(arrA.length){
        const n = carry + +arrA.pop();
        
        if(n >= 10){
            carry = 1;
            result = n - 10 + result;
        }else{
            carry = 0;
            result = n + result;
        }
    }
    
    while(arrB.length){
        const n = carry + +arrB.pop();
        
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