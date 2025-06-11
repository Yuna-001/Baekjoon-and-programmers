function solution(n, w, num) {
    const container = Array.from({length: w}, ()=> []);
    
    let y = 0;
    
    let box = 1;
    let targetPosition;
    
    while(box <= n){
        for(let i=0; i<w && box <= n; i++){
            if(box === num) targetPosition = [i,y]
            container[i][y] = box++;
        }
        y++;
        
        for(let i=w-1; i>=0 && box <= n; i--){
            if(box === num) targetPosition = [i,y]
             container[i][y] = box++;
        }
        y++;
    }
    
    return container[targetPosition[0]].length - targetPosition[1];
}