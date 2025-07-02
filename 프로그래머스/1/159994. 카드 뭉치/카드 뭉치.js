function solution(cards1, cards2, goal) {
    let i = 0;
    let isPossible = true;
    
    while(i<goal.length && isPossible){
        isPossible = false;
        while(cards1.length > 0 && i<goal.length){
            const str = cards1[0];
            
            if(goal[i] !== str) break;
            
            i++;
            cards1.shift();
            isPossible=true;
        }
        
         while(cards2.length > 0 && i<goal.length){
            const str = cards2[0];
            
            if(goal[i] !== str) break;
            
            i++;
            cards2.shift();
            isPossible=true;
        }
    }
    
    return isPossible ? "Yes" : "No"
}