function solution(array, height) {
    let result = 0;
    
    array.forEach(n => {
        if(n > height) result++;
    })
    
    return result;
}