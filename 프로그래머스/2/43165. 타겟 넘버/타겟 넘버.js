function solution(numbers, target) {
    let count = 0;
    
    function checkIsTarget(nextIndex,nowNum){
        if(nextIndex === numbers.length) {
            if(nowNum === target) count++;
            return;
        }
        
        checkIsTarget(nextIndex + 1, nowNum + numbers[nextIndex]);
        checkIsTarget(nextIndex + 1, nowNum - numbers[nextIndex]);
    }
    
    checkIsTarget(0,0);
    
    return count;
}