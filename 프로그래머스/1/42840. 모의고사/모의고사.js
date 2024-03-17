function solution(answers) {
    const p1 = [1,2,3,4,5]; 
    const p2 = [2,1,2,3,2,4,2,5];  
    const p3 = [3,3,1,1,2,2,4,4,5,5]; 
    const scores = [0,0,0];
    const result = [];
    
    answers.forEach((answer,i)=>{
        if(p1[i%p1.length] === answer) scores[0]++;
        if(p2[i%p2.length] === answer) scores[1]++;
        if(p3[i%p3.length] === answer) scores[2]++;
    })
    
    const max = Math.max(...scores);
    
    scores.forEach((score,i)=>{
        if(score === max) result.push(i+1);
    })  
  
    return result;
}