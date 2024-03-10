function solution(lines) {
    const count = new Map();
    
    for (const line of lines){
        for(let i=line[0]; i< line[1]; i++){
            count.set( i, (count.get(i) || 0) + 1)
        }
    }
    
    return [...count].filter((n)=>n[1]>1).length;
}