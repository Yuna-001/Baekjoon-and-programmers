function solution(s) {
    let countTransform = 0;
    let countZero = 0;
    
    while(s !== "1"){
        const arr = s.split("");
        const prevLength = arr.length;
        const countOne = arr.filter(n => n === "1").length;
        
        countZero += prevLength - countOne;
        countTransform++;
        
        s = countOne.toString(2);
    }
    
    return [countTransform, countZero]
}