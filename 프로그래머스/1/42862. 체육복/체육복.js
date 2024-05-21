function solution(n, lost, reserve) {
    let count = lost.length;
    let index = 0;
    
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
   
    for(let i=0; i<reserve.length; i++){
        for(let j=index; j<lost.length; j++){
            if(Math.abs(reserve[i] - lost[j]) <= 1){
                if(reserve[i+1]===lost[j]) i++;
                else if(reserve[i] === lost[j+1]) j++;
                index = j+1;
                count--;
                break;
            }
        }
    }
    
    return n - count;
}