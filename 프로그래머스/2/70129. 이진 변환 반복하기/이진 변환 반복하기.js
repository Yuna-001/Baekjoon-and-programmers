function solution(s) {
    let zero = 0;
    let count = 0;
  
    while(s !== "1"){
        const prevLength = s.length;
        const length = s.replaceAll("0","").length;
      
        zero += prevLength - length;
        count++;
        
        s=length.toString(2);
    }
    
    return [count, zero];
}