function solution(number, k) {
    const length = number.length;
    let result = "";
    let maxIdx = -1;
    const numArr = [...number].map(n => +n);
    
    for(let i=length-k; i>=1; i--){
        let max = -1;
        
        for(let j=maxIdx+1; j<=length-i; j++){
            if(numArr[j] > max){
                maxIdx = j;
                max = numArr[j];
            }
        }
        
        result += numArr[maxIdx];
    }
    
    return result;
}