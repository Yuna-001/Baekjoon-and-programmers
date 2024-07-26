function solution(strArr) {
    const lengthObj = {};
    
    strArr.forEach(str => {
        lengthObj[str.length] = (lengthObj[str.length] || 0) + 1; 
    });
    
    return Math.max(...Object.values(lengthObj))
}