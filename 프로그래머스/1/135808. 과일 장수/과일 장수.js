function solution(k, m, score) {
    if (score.length < m) return 0;
    
    let profit = 0;
    
    score.sort((a,b)=>b-a);
    
    for(let i=m-1; i<score.length; i+=m){
        profit += score[i] * m;
    }
    
    return profit;
}