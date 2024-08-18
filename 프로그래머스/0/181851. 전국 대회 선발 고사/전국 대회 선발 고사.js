function solution(rank, attendance) {
    const candidates = [];
    
    for(let i=0; i<rank.length; i++){
        if(attendance[i]){
            candidates.push({number : i, rank: rank[i]});
        }
    }
    
    candidates.sort((a,b)=>a.rank-b.rank);
    
    return candidates[0].number * 10000 + candidates[1].number * 100 + candidates[2].number;
}