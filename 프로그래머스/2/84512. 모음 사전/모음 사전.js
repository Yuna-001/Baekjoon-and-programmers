function solution(word) {
    const dict = { A:0, E:1, I:2, O:3, U:4 };
    let result = 0;
    
    for(let digit=5, n=0; digit>5-word.length; digit--,n=0){
        
        for(let j=1; j<=digit; j++){
            n = n * 5 + 1;
        }
        
        result += n * dict[word[5-digit]] + 1;
    }
    
    return result;
}