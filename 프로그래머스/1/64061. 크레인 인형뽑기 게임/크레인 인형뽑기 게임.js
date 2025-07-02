function solution(board, moves) {
    const stack = [];
    let result = 0;
    
    for(const move of moves){
        const col = move-1;
        
        for(let i=0; i<board.length; i++){
            if(board[i][col] > 0){
                const doll = board[i][col];
    
                if(stack.at(-1) === doll){
                    stack.pop();
                    result += 2;
                }else{
                    stack.push(doll);
                }
                
                board[i][col] = 0;
                break;
            }
        }
    }
    
    return result;
}