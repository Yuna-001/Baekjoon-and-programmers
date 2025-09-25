function solution(n, computers) {
    let network = 0;
    const checked = new Array(n).fill(false);
    const connection = Array.from({length:n},()=>[]);
    
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(computers[i][j]===1){
                connection[i].push(j);
                connection[j].push(i);
            }
        }
    }
    
    function check(computer){
        for(const com of connection[computer]){
            if(!checked[com]){
                checked[com] = true;
                check(com);
            }
        }
    }
    
    for(let i=0; i<n; i++){
        if(!checked[i]){
            check(i);
            network++;
        }
    }
    
    return network;
}