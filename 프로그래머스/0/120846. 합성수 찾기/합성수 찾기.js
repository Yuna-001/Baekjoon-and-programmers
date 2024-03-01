function solution(n) {
    let count = 0;
    let result = 0;
    
    for(let i=1; i<=n; i++){
        
        for(let j=1; j<=i; j++){
            if(i%j===0){
                count++;
            }
            
            if(count>=3){
                result++;
                break;
            }
        }
        count = 0;
    }
    
    return result;
}