function solution(arr) {
    for(let row=0; row<arr.length; row++){
        for(let col=row+1; col<arr.length; col++){
            if(arr[row][col] !== arr[col][row]) return 0;
        }
    }
    
    return 1;
}