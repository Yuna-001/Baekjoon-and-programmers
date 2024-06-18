function solution(dirs) {
    const obj = {};
    let count = 0;
    let position = [0,0];
    
    for(const dir of dirs){
        
        const current = position.toString();
        
        if(dir === "U"){
            if(position[1] === 5) continue;
            position[1]++;
        }else if(dir === "D"){
            if(position[1] === -5) continue;
            position[1]--;
        }else if(dir === "R"){
            if(position[0] === 5) continue;
            position[0]++;
        }else if(dir === "L"){
            if(position[0] === -5) continue;
            position[0]--;
        }
        
        const next = position.toString();
        
        if(!obj[current]){
            obj[current] = [];
        }
        
        if(!obj[next]){
            obj[next] = [];
        }
        
        if(!obj[current].includes(next) && !obj[next].includes(current)){
            obj[current].push(next);
            count++;
        }
    }
    
    return count;
}