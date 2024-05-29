function solution(msg) {
    const dict = {length : 0};
    const answer = [];
    
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].forEach(x => dict[x] = ++dict.length);
    
    for(let i=0; i<msg.length; i++){
        let idx = dict[msg[i]];
        let wordLength = 0;
        for(let j=i+2; j<=msg.length; j++){
            const word = msg.slice(i,j);
            const newIdx = dict[word];
            if(newIdx){
                idx = newIdx;
                wordLength++;
            }else{
                dict[word] = ++dict.length;
                break;
            }
        }
        i += wordLength;
        answer.push(idx);
    }
    
    return answer;
}
