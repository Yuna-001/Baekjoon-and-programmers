function solution(brown, yellow) {
    const total = brown + yellow;
    for(let rows=3; rows<=Math.sqrt(brown+yellow); rows++){
        if(total%rows===0){
            const cols = total/rows;
            if((cols-2)*(rows-2) === yellow) return [cols, rows];
        }
    }
}