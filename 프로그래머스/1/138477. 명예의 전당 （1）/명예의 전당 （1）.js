function solution(k, score) {
    const result = new Array(score.length);
    for (let i=0; i< score.length; i++){
        if(i<k){
            result[i] = Math.min(...score.slice(0,i+1));
        }else{
            result[i]=score.slice(0,i+1).sort((a,b)=>b-a)[k-1];
        }
    }      
    return result;
}