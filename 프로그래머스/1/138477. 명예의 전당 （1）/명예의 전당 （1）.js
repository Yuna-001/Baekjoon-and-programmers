function solution(k, score) {
    const fameArr = [];
    const result = [];
    
    for(let i=0; i<score.length; i++){
        fameArr.push(score[i]);
        fameArr.sort((a,b)=>b-a);
        if(fameArr.length > k) fameArr.pop();
        result[i] = fameArr.at(-1);
    }
    
    return result;
}