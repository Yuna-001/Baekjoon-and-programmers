function solution(k, scores) {
    const ranking = [];
    const result = [];
    let last;
    
    scores.forEach((score,index) => {
        if(index < k){
            ranking.push(score);
            if(index > 0){
                for(let i=index; i>0; i--){
                    if(score > ranking[i-1]){
                        [ranking[i],ranking[i-1]] = [ranking[i-1],ranking[i]];
                    }
                }
            }
        }else{
            if (score > last){
                ranking[k-1] = score;
                for(let i=k-1; i>0; i--){
                    if(score > ranking[i-1]){
                        [ranking[i],ranking[i-1]] = [ranking[i-1],ranking[i]];
                    }
                }
            }
        } 
        last = ranking.at(-1);
        result.push(last);
    })
    
    return result;
}