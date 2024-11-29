function solution(n) {
    const triangleSnail = Array.from({length:n}, (_,i)=>Array(i+1).fill(0));
    
    let num =1;
    let startRow = 0;
    let startCol = 0;
    let endRow = n-1;
    let layer = 0;
    
    while(startRow <= endRow){
        for(let i=startRow; i<=endRow; i++){
            triangleSnail[i][startCol] = num++;
        }
        startRow++;
        startCol++;
        
        for(let i=startCol; i<=triangleSnail[endRow].length-1-layer;i++){
            triangleSnail[endRow][i] = num++;
        }
        endRow--;
        
        for(let i=endRow; i>=startRow; i--){
            triangleSnail[i][triangleSnail[i].length-1-layer] = num++;
        }
        layer++;
        startRow++;
    }
    
    return triangleSnail.flat();
}