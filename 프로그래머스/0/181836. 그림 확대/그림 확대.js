function solution(picture, k) {
    const result = [];
    
    for(const str of picture){
        let newStr = "";
        for(const c of str){
            newStr += c.repeat(k);
        }
        for(let i=0; i<k; i++){
            result.push(newStr);
        }
    }
    
    return result;
}