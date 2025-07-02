function solution(s) {
    const length = s.length;
    const str2 = s.repeat(2);
    const pair = {"}":"{","]":"[",")":"("}
    let result = 0;
    
    for(let i=0; i<length; i++){
        const str = str2.slice(i,i+length);
        const stack = [];
        let isIncorrect = false;
        
        for(const char of str){
            if(pair[char]===undefined){
                stack.push(char);
            }else if(pair[char] === stack.at(-1)){
                stack.pop()
            }else{
                isIncorrect = true;
                break;
            }
        }
        
        if(!isIncorrect && stack.length === 0) result++;
    }
    
    return result;
}