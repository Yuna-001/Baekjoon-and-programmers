function solution(scores) {
    let rank = 1;
    
    for(let i=1; i<scores.length; i++){
        if(scores[0][0] < scores[i][0] && scores[0][1] < scores[i][1]){
            return -1;
        }
    }
    
    for(let i=1; i<scores.length; i++){
        if(scores[i][0]+scores[i][1] > scores[0][0]+scores[0][1]){
            rank++;
            
            for(let j=1; j<scores.length; j++){
                if(i===j) continue;
                if(scores[i][0] < scores[j][0] && scores[i][1] < scores[j][1]){
                    rank--;
                    break;
                }
            }
        }
    }
    
    return rank;
}