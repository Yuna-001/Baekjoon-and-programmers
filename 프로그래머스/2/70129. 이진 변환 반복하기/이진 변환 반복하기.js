function solution(s) {
    let countTransform = 0;
    let countZero = 0;
    
    while(s !== "1"){
        const prevLength = s.length;
        const countOne = s.split("0").join("").length;
        
        countZero += prevLength - countOne;
        countTransform++;
        
        s = countOne.toString(2);
    }
    
    return [countTransform, countZero]
}