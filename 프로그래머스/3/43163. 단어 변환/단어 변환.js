function solution(begin, target, words) {
    const queue = [[begin,0]];
    const visited = {};
    
    while(queue.length){
        const [word,count] = queue.shift();
        
        if(word === target) return count;
        
        for(let i=0; i<words.length; i++){
            if(visited[words[i]]) continue;
            
            let different = 0;
            
            for(let j=0; j<word.length && different<2; j++){
                if(words[i][j] !== word[j]) different++;
            }
            
            if(different === 1){
                queue.push([words[i],count+1]);
                visited[words[i]] = true;
            }
        }
    }
    
    return 0;
}