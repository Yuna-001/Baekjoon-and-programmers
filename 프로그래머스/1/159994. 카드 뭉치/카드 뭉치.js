function solution(cards1, cards2, goal) {
    let idx1 = 0;
    let idx2 = 0;
    let goalIdx = 0;
    let isPossible = true;
    
    while(goalIdx < goal.length){
       if(cards1[idx1] === goal[goalIdx]){
           idx1++;
           goalIdx++;
       }else if(cards2[idx2] === goal[goalIdx]){
           idx2++;
           goalIdx++;
       }else{
           isPossible =false;
           break;
       }
    }
    
    return isPossible ? "Yes" : "No";
}