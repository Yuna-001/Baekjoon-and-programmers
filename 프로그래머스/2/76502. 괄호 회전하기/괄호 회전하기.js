function solution(s) {
    const pairs = { "{" :"}", "[" : "]", "(" : ")" };
    let count = 0;
    
    for(let i=0; i<s.length; i++){
        const stack = [];
        const str = (s+s).slice(i,i+s.length);
        let isValid =true;
        
        for(const c of str){
            if(pairs[c]){
                stack.push(c);
            }else if(pairs[stack.at(-1)] === c){
                stack.pop();
            }else {
                isValid =false;
                break;
            }
        }
        
        if(isValid && stack.length===0) count++;
    }
    
    return count;
}