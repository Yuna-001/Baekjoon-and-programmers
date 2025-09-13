function solution(progresses, speeds) {
    const result = [];
 
    const spendDays = progresses.map((progress,i) => Math.ceil((100-progress)/speeds[i]));
    let max = spendDays[0];
    let count = 1;
    
    for(let i=1; i<spendDays.length; i++){
        if(spendDays[i] <= max){
            count++;
        }else{
            result.push(count);
            max = spendDays[i];
            count = 1;
        }
    }
    
    result.push(count);
    
    return result;
}