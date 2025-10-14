function solution(name, yearning, photo) {
   const score = {};
    
    for(let i=0; i<name.length; i++){
        score[name[i]] = yearning[i];
    }
    
    const result = [];
    
    for(let i=0; i<photo.length; i++){
        let sum = 0;
        
        for(const person of photo[i]){
            if(score[person]) sum += score[person];
        }
        
        result.push(sum);
    }
    
    return result;
}