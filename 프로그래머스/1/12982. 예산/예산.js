function solution(d, budget) {
    let count = 0;
    let remainingBudget = budget;
    
    d.sort((a,b)=>a-b);
    
    for(let i=0; i<d.length; i++){
        if(remainingBudget >= d[i]){
            count++;
            remainingBudget -= d[i];
        }else{
            break;
        }
    }
    
    return count;
}