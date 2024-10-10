function solution(board, moves) {
    let count = 0
    const stack = [];
    const colStacks = Array.from({length:board[0].length},()=>[]);
    
    for(let row=board.length-1; row>=0; row--){
        for(let col=0; col<board[row].length; col++){
            if(board[row][col]) colStacks[col].push(board[row][col]);
        }
    }
    
    for(const move of moves){
        if(colStacks[move-1].length === 0) continue;
        
        const doll = colStacks[move-1].pop();
        if(doll === stack.at(-1)){
            count += 2;
            stack.pop();
        }else{
            stack.push(doll);
        }
    }
    
    return count;
}