function solution(n) {
    const rows = [];
    const diagonal1 = [];
    const diagonal2 = [];
    let count = 0;
    
    function findPosition(row){
        if(row === n){
            count++;
            return;
        }
        
        for(let col=0; col<n; col++){ 
            if(!(rows[col] || diagonal1[col+row] || diagonal2[col+n-row])){
                rows[col] = diagonal1[col+row] = diagonal2[col+n-row] = true;
                findPosition(row+1);
                rows[col] = diagonal1[col+row] = diagonal2[col+n-row] = false;
            }
        }
    }
    
    findPosition(0);
    
    return count;
}