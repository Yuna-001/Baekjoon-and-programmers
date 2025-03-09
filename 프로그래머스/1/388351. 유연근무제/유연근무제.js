function solution(schedules, timelogs, startday) {
    let result = schedules.length;
    
    for(let i = 0; i < schedules.length; i++){
        const targetTime = getMinutes(schedules[i]) + 10;
        
        for(let j = 0; j < timelogs[i].length; j++){
            if((startday-1+j)%7 >= 5) continue;
            
            const time = getMinutes(timelogs[i][j]);
            
            if(time > targetTime){
                result--;
                break;
            }
        }
    }
    
    return result;
}

function getMinutes(time){
    return Math.floor(time/100) * 60 + time % 100;
}