function solution(k, dungeons) {
    const visited = [];
    let max = 0;
    
    function explore(hp,count){
        max = Math.max(max, count);
        
        for(let i=0; i<dungeons.length; i++){
            const [min,spend] = dungeons[i];
            if(!visited[i] && hp >= min){
                visited[i] = true;
                explore(hp-spend,count+1);
                visited[i] = false;
            }
        }
        
    }
    
    explore(k,0,0);
    
    return max;
}