function solution(board) {
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    const M = board.length;
    const N = board[0].length;
    const costs = Array.from({length: M},()=> Array.from({length: N}, () => new Array(4).fill(Infinity)));

    const queue = new Queue();

    queue.push([0,0,-1,0]);
    costs[0][0] = [0,0,0,0];

    while(!queue.isEmpty()){
        const [y,x,prevDirection,cost] = queue.pop();

        for(let i=0; i<4; i++){
            const [dy,dx] = directions[i];
            const nextX = x + dx;
            const nextY = y + dy;

            if(nextX < 0 || nextY < 0 || nextX >= N || nextY >= M || board[nextY][nextX]) continue;

            let newCost = cost + 100;

            if(prevDirection !== -1 && prevDirection !== i) {
                newCost += 500;
            }

            if(newCost <= costs[nextY][nextX][i]){
                costs[nextY][nextX][i] = newCost;
                queue.push([nextY,nextX,i,newCost]);
            }
        }
    }

    return Math.min(...costs[M-1][N-1]);
}

class Queue{
    constructor(){
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    isEmpty(){
        return this.front === this.rear;
    }

    push(val){
        this.items.push(val);
        this.rear++;
    }

    pop(){
        return this.items[this.front++];
    }
}
