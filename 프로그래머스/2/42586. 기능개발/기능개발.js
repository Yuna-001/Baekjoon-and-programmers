
function solution(progresses, speeds) {
    const days = Array.from({length: speeds.length}, (_,i) => Math.ceil((100-progresses[i])/speeds[i]));
    const result = [];
    let count = 1;
    let maxDay = days[0];
    
    for(let i=1; i<=days.length; i++){
        if(days[i] <= maxDay){
            count++;
        } else{
            result.push(count);
            maxDay = days[i];
            count = 1;
        } 
    }
    
    return result;
}