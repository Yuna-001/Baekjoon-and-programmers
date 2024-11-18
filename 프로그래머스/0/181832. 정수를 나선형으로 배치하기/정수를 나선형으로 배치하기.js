function solution(n) {
    let startCol = 0;
    let endCol = n-1;
    let startRow = 0;
    let endRow = n-1;
    
    const result = Array.from({length:n},()=>Array(n).fill(0));
    
    let num = 1;
    
    while(startCol <= endCol && startRow <= endRow){
        for(let i=startCol; i<=endCol; i++){
            result[startRow][i] = num++;
        }
        startRow++;
        
        for(let i=startRow; i<=endRow; i++){
            result[i][endCol] = num++;
        }
        endCol--;
        
        for(let i=endCol; i>=startCol; i--){
            result[endRow][i] = num++;
        }
        endRow--;
        
        for(let i=endRow; i>=startRow; i--){
            result[i][startCol] = num++;
        }
        startCol++;
    }
    
    return result;
}