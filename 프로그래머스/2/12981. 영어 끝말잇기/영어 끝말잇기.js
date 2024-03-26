function solution(n, words) {
    const set = new Set();
    let endChar = words[0][0];
    
    for(let i=0;i<words.length; i++){
        if(endChar !== words[i][0] || set.has(words[i])) return [i%n+1, Math.ceil((i+1)/n)];
        endChar = words[i].at(-1);
        set.add(words[i]);
    }
    
    return [0,0]
}