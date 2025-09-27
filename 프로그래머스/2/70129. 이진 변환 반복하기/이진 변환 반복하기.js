function solution(s) {
    let times = 0;
    let zeros = 0;
    
    while(s !== "1"){
        const prevLength = s.length;
        const length = s.replace(/0/g,"").length;
        
        s = length.toString(2);
        
        zeros += prevLength - length;
        times++;
    }
    
    return [times, zeros];
}