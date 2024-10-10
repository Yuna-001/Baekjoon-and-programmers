function solution(cards1, cards2, goal) {
    let idx1 = 0;
    let idx2 = 0;
    let goalIdx = 0;
    
    while(goalIdx < goal.length){
       if(cards1[idx1] === goal[goalIdx]){
           idx1++;
           goalIdx++;
       }else if(cards2[idx2] === goal[goalIdx]){
           idx2++;
           goalIdx++;
       }else{
           return "No";
       }
    }
    
    return "Yes";
}