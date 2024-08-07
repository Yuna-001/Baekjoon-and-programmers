function solution(n, k) {
    let digit = 0;
    let factorial = 1;
    
    while(factorial < k){
        factorial *= ++digit;
    }
    
    const arr = Array.from({length:digit},(_,i)=>n-digit+i+1);
    const result = Array.from({length:n-digit},(_,i)=>i+1);
    let share;
    let rest = k-1;
    
    while(rest){
        factorial /= digit--;
        share = Math.floor(rest / factorial);
        rest = rest % factorial;
        result.push(...arr.splice(share,1));
    }
    
    if(arr.length) result.push(...arr);
    
    return result;
}
