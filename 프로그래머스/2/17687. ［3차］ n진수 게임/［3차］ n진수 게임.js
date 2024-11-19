function solution(n, t, m, p) {
    // 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p
    let result = "";
    
    let order = 0;
    let turn  = 1;
    
    let num = 0;
    const queue = [0];
    
    while(turn <= t){
        const answer = queue.shift();
        
        if(queue.length === 0){
            num++;
            queue.push(...num.toString(n).toUpperCase());
        }
        
        if(order === p-1){
            result += answer;
            turn++;
        }
        
        order = (order + 1) % m;
    }
    
    return result;
}