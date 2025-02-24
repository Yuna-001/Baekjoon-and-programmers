function solution(array) {
    const count = new Map();
    
    array.forEach(n => {
        count.set(n, (count.get(n) || 0) + 1);
    });
    
    let maxKey = -1; 
    let maxValue = -1;
    
    for(const [key,value] of  [...count]){
        if(value > maxValue){
            maxValue = value;
            maxKey = key;
        }
    }
    
    for(const [key,value] of  [...count]){
        if(value === maxValue && key !== maxKey){
            return -1;
        }
    }
    
   return maxKey;
}