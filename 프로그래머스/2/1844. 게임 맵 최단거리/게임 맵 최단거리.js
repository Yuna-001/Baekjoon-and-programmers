function solution(maps) {
    const goal = [maps.length-1, maps[0].length-1];
    const queue = [[0,0,1]];
    const directions = [[1,0],[0,1],[-1,0],[0,-1]];

    while(queue.length){
        const [row,col,step] = queue.shift();

        if(row === goal[0] && col === goal[1]) return step;

        for(const direction of directions){
            const nextRow = row + direction[0];
            const nextCol = col + direction[1];

            if(nextRow >= 0 && nextRow <= goal[0] && nextCol >= 0 && nextCol <= goal[1] && maps[nextRow][nextCol]){
                queue.push([nextRow,nextCol,step+1]);
                maps[nextRow][nextCol] = 0;
            }
        }
    }

    return -1;
}