function solution(land) {
    const N = land.length;
    
    for(let row=1; row<N; row++){
        for(let col=0; col<4; col++){
          land[row][col] = land[row][col] + Math.max(...land[row-1].filter((_,idx)=>idx !== col))
        }
    }
    
    return Math.max(...land[N-1])
}