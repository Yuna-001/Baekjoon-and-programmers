function solution(k, dungeons) {
    let max = 0;
    const visited = {};
    
    function explore(hp,count){
        if(count > max){
            max = count;
        }
        
        for(let i=0; i<dungeons.length; i++){
            const [minimum,spend] = dungeons[i];
            if(!visited[i] && hp >= minimum){
                visited[i] = true;
                explore(hp-spend,count+1);
                visited[i] = false;
            }
        }
    }
    
    explore(k,0);
    
    return max;
}