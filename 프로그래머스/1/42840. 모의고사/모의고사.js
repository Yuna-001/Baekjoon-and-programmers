function solution(answers) {
    const result = [];
    const scores = [];
    const patterns = [[1,2,3,4,5],[2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    let max = 0;
    
   for(const pattern of patterns){
       const score = answers.filter((answer,i) => answer === pattern[i%pattern.length]).length;
       scores.push(score);
       if(score>max) max = score;
   }
    
    scores.forEach((score,i)=>{
        if(score === max) result.push(i+1);
    })
    
    return result;
}